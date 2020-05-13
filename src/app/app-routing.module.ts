import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'tabs/currency',
    loadChildren: () => import('./currency/currency.module').then( m => m.CurrencyPageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'invite-friends',
    loadChildren: () => import('./invite-friends/invite-friends.module').then( m => m.InviteFriendsPageModule),
    canActivate : [AuthGuard]

  },
  {
    path: 'buy-point',
    loadChildren: () => import('./buy-point/buy-point.module').then( m => m.BuyPointPageModule),
    canActivate : [AuthGuard]

  },
  {
    path: 'subscription',
    loadChildren: () => import('./subscription/subscription.module').then( m => m.SubscriptionPageModule),
    canActivate : [AuthGuard]

  },
  {
    path: 'create-comp',
    loadChildren: () => import('./create-comp/create-comp.module').then( m => m.CreateCompPageModule),
    canActivate : [AuthGuard]

  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule),
    canActivate : [AuthGuard]

  },
  {
    path: 'message',
    loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule),
    canActivate : [AuthGuard]

  },
  {
    path: 'vip-account',
    loadChildren: () => import('./vip-account/vip-account.module').then( m => m.VipAccountPageModule),
    canActivate : [AuthGuard]

  },
  {
    path: 'add-link',
    loadChildren: () => import('./add-link/add-link.module').then( m => m.AddLinkPageModule),
    canActivate : [AuthGuard]

  },
  {
    path: 'log-in',
    loadChildren: () => import('./log-in/log-in.module').then( m => m.LogInPageModule),
    
  },
  {
    path: 'details-campaign',data: {data : ''},
    loadChildren: () => import('./details-campaign/details-campaign.module').then( m => m.DetailsCampaignPageModule),
    canActivate : [AuthGuard]

  },
  {
    path: 'create-subscripe',
    loadChildren: () => import('./create-subscripe/create-subscripe.module').then( m => m.CreateSubscripePageModule),
    canActivate : [AuthGuard]

  },
  {
    path: 'reedem-invite',
    loadChildren: () => import('./reedem-invite/reedem-invite.module').then( m => m.ReedemInvitePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
