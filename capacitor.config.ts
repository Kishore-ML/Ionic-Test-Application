import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Ionic_Test_App',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
  ios: {
    scheme: 'myapp' // Custom URL scheme for iOS
  },
};

export default config;
