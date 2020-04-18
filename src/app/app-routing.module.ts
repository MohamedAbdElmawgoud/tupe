import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tabs/currency',
    loadChildren: () => import('./currency/currency.module').then( m => m.CurrencyPageModule)
  },
  {
    path: 'invite-friends',
    loadChildren: () => import('./invite-friends/invite-friends.module').then( m => m.InviteFriendsPageModule)
  },
  {
    path: 'buy-point',
    loadChildren: () => import('./buy-point/buy-point.module').then( m => m.BuyPointPageModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('./subscription/subscription.module').then( m => m.SubscriptionPageModule)
  },
  {
    path: 'create-comp',
    loadChildren: () => import('./create-comp/create-comp.module').then( m => m.CreateCompPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'vip-account',
    loadChildren: () => import('./vip-account/vip-account.module').then( m => m.VipAccountPageModule)
  },
  {
    path: 'add-link',
    loadChildren: () => import('./add-link/add-link.module').then( m => m.AddLinkPageModule)
  },
  {
    path: 'log-in',
    loadChildren: () => import('./log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'details-campaign',data: {data : ''},
    loadChildren: () => import('./details-campaign/details-campaign.module').then( m => m.DetailsCampaignPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
