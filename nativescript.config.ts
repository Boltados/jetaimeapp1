import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'com.jetaimeshopping.app',
  appPath: 'app',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
  ios: {
    discardUncaughtJsExceptions: true
  },
  useLibs: true,
  webpackConfigPath: 'webpack.config.js'
} as NativeScriptConfig;