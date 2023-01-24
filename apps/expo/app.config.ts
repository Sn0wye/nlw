import { ExpoConfig, ConfigContext } from '@expo/config';

const defineConfig = (_ctx: ConfigContext): ExpoConfig => ({
  name: 'expo',
  slug: 'expo',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#09090a'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'your.bundle.identifier'
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/icon.png',
      backgroundColor: '#09090a'
    }
  },
  extra: {
    eas: {
      projectId: 'your-project-id'
    }
  },
  plugins: ['./expo-plugins/with-modify-gradle.js']
});

export default defineConfig;
