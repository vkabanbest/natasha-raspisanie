import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ru.natasha.schedule',
  appName: 'Расписание',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 1600,
      launchAutoHide: true,
      launchFadeOutDuration: 350,
      backgroundColor: '#FAF4EB',
      showSpinner: false
    }
  }
};

export default config;
