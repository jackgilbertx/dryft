const { IOSConfig } = require('@expo/config-plugins');
const {
  withUnimodulesIOS,
  withXcodeProject,
} = require('@expo/config-plugins/ios');
const { withPlugins } = require('react-native-expo-plugins');

module.exports = function withReanimated(config, { ios }) {
  return withPlugins(config, [
    // Add other plugins if needed
    [withUnimodulesIOS],
    (config) => {
      if (ios) {
        // Add necessary dependencies to the podfile
        config = withXcodeProject(config, (config) => {
          config.podfile.add(`pod 'ReactNativeReanimated', path: '../node_modules/react-native-reanimated'`);
          return config;
        });
      }
      return config;
    },
  ]);
};
