import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideIcons } from '@ng-icons/core';

import {
  matHomeOutline,
  matSearchOutline,
  matMenuOutline,
  matPerson2Outline,
  matInboxOutline,
  matBarChartOutline,
  matGroups3Outline
} from '@ng-icons/material-icons/outline';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideIcons({ matHomeOutline, matSearchOutline, matMenuOutline, matPerson2Outline, matGroups3Outline, matInboxOutline, matBarChartOutline ,
      
      

    })
  ]
};
