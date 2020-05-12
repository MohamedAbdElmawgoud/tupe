let googlePayClient;
function onGooglePayLoaded() {
    googlePayClient = new google.payments.api.PaymentsClient({
        environment: 'TEST'
    });

    googlePayClient.isReadyToPay(googlePayBaseConfiguration)
        .then(function (response) {
            if (response.result) {
                createAndAddButton();
            } else {
                alert("Unable to pay using Google Pay");
            }
        }).catch(function (err) {
            console.error("Error determining readiness to use Google Pay: ", err);
        });
}
const baseCardPaymentMethod = {
    type: 'CARD',
    parameters: {
        allowedCardNetworks: ['VISA', 'MASTERCARD'],
        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS']
    }
};

const googlePayBaseConfiguration = {
    apiVersion: 12,
    apiVersionMinor: 0,
    allowedPaymentMethods: [baseCardPaymentMethod]
};

function createAndAddButton() {

    const googlePayButton = googlePayClient.createButton({

        // currently defaults to black if default or omitted
        buttonColor: 'default',

        // defaults to long if omitted
        buttonType: 'long',

        onClick: onGooglePaymentsButtonClicked
    });

    document.getElementById('buy-now').appendChild(googlePayButton);
}

function onGooglePaymentsButtonClicked() {
    // TODO: Perform transaction
}

const tokenizationSpecification = {
    type: 'PAYMENT_GATEWAY',
    parameters: {
        gateway: 'example',
        gatewayMerchantId: 'gatewayMerchantId'
    }
};

const shippingOptionParameters = {
    shippingOptions: [
        {
            id: 'shipping-001',
            label: '$1.99: Standard shipping',
            description: 'Delivered on May 15.'
        },
        {
            id: 'shipping-002',
            label: '$3.99: Expedited shipping',
            description: 'Delivered on May 12.'
        },
        {
            id: 'shipping-003',
            label: '$10: Express shipping',
            description: 'Delivered tomorrow.'
        }
    ]
};

// Shipping surcharges mapped to the IDs above.
const shippingSurcharges = {
    'shipping-001': 1.99,
    'shipping-002': 3.99,
    'shipping-003': 10
};
      
      
      
// Place inside of onGooglePaymentsButtonClicked()
paymentDataRequest.shippingAddressRequired = true;
paymentDataRequest.shippingOptionRequired = true;
paymentDataRequest.callbackIntents = ['SHIPPING_OPTION'];
paymentDataRequest.shippingOptionParameters = shippingOptionParameters;


function onGooglePayLoaded() {
    googlePayClient = new google.payments.api.PaymentsClient({
      paymentDataCallbacks: { onPaymentDataChanged: paymentDataCallback },
      environment: 'TEST'
    });
   
  }
  
  function paymentDataCallback(callbackPayload) {
  
    const selectedShippingOptionId = callbackPayload.shippingOptionData.id;
    const shippingSurcharge = shippingSurcharges[selectedShippingOptionId];
    const priceWithSurcharges = 123.45 + shippingSurcharge;
  
    return {
      newTransactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPrice: priceWithSurcharges.toFixed(2),
        totalPriceLabel: 'Total',
        currencyCode: 'USD',
        displayItems: [
          {
            label: 'Subtotal',
            type: 'SUBTOTAL',
            price: priceWithSurcharges.toFixed(2),
          },
          {
            label: 'Shipping',
            type: 'LINE_ITEM',
            price: shippingSurcharge.toFixed(2),
            status: 'FINAL'
          }]
      }
    }
  };
  googlePayClient.isReadyToPay(googlePayBaseConfiguration)
  .then(function(response) {
    if(response.result) {
      createAndAddButton();
      googlePayClient.prefetchPaymentData(paymentDataRequest);
    }
  });