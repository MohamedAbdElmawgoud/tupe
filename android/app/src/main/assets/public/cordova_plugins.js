
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-app-version.AppVersionPlugin",
          "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
          "pluginId": "cordova-plugin-app-version",
        "clobbers": [
          "cordova.getAppVersion"
        ]
        },
      {
          "id": "cordova-clipboard.Clipboard",
          "file": "plugins/cordova-clipboard/www/clipboard.js",
          "pluginId": "cordova-clipboard",
        "clobbers": [
          "cordova.plugins.clipboard"
        ]
        },
      {
          "id": "cordova-plugin-badge.Badge",
          "file": "plugins/cordova-plugin-badge/www/badge.js",
          "pluginId": "cordova-plugin-badge",
        "clobbers": [
          "cordova.plugins.notification.badge"
        ]
        },
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "cordova-plugin-background-mode.BackgroundMode",
          "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
          "pluginId": "cordova-plugin-background-mode",
        "clobbers": [
          "cordova.plugins.backgroundMode",
          "plugin.backgroundMode"
        ]
        },
      {
          "id": "cordova-plugin-admobpro.AdMob",
          "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
          "pluginId": "cordova-plugin-admobpro",
        "clobbers": [
          "window.AdMob"
        ]
        },
      {
          "id": "cordova-plugin-googleplus.GooglePlus",
          "file": "plugins/cordova-plugin-googleplus/www/GooglePlus.js",
          "pluginId": "cordova-plugin-googleplus",
        "clobbers": [
          "window.plugins.googleplus"
        ]
        },
      {
          "id": "cordova-plugin-statusbar.statusbar",
          "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
          "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
          "window.StatusBar"
        ]
        },
      {
          "id": "com.bunkerpalace.cordova.YoutubeVideoPlayer.YoutubeVideoPlayer",
          "file": "plugins/com.bunkerpalace.cordova.YoutubeVideoPlayer/plugins/com.bunkerpalace.cordova.YoutubeVideoPlayer/www/YoutubeVideoPlayer.js",
          "pluginId": "com.bunkerpalace.cordova.YoutubeVideoPlayer",
        "clobbers": [
          "YoutubeVideoPlayer"
        ]
        },
      {
          "id": "cordova-plugin-youtube-video-player.YoutubeVideoPlayer",
          "file": "plugins/cordova-plugin-youtube-video-player/plugins/com.bunkerpalace.cordova.YoutubeVideoPlayer/www/YoutubeVideoPlayer.js",
          "pluginId": "cordova-plugin-youtube-video-player",
        "clobbers": [
          "YoutubeVideoPlayer"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "com.bunkerpalace.cordova.YoutubeVideoPlayer": "1.0.5",
      "cordova-clipboard": "1.3.0",
      "cordova-plugin-admobpro": "2.49.0",
      "cordova-plugin-app-version": "0.1.9",
      "cordova-plugin-background-mode": "0.7.3",
      "cordova-plugin-badge": "0.8.8",
      "cordova-plugin-extension": "1.5.4",
      "cordova-plugin-googleplus": "8.4.0",
      "cordova-plugin-youtube-video-player": "2.4.0",
      "cordova-support-android-plugin": "1.0.2",
      "cordova-support-google-services": "1.4.0",
      "cordova-plugin-device": "2.0.2",
      "cordova-plugin-statusbar": "2.4.2",
      "cordova-plugin-whitelist": "1.3.3"
    };
    // BOTTOM OF METADATA
    });
    