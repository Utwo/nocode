
import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'app',globalStyle: 'src/style.css', 
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/'
    }
  ]
};