import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  
} from '@abacritt/angularx-social-login';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    {
      provide:'SocialAuthServiceConfig',
      useValue:{
        autoLogin: false,
        providers:[
{
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '109042954699-62vbpudqsnrp7t9o7ccl5vie0l9n5olp.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              'YOUR_FACEBOOK_APP_ID'
            ),
          },
         
        ],
      } as SocialAuthServiceConfig
    }
  ]
};
