# PhoneGap Text-to-Speech Plugin

## Platforms

iOS 7+  
Android 4.0.3+ (API Level 15+)

## Usage

Install Plugin in Phonegap / Cordova Project using the CLI-Tool:

`cordova plugin add https://github.com/tobiasvogel/cordova-plugin-tts
`

Invoke the Plugin in HTML using the following Code

`/ * within 'onDeviceReady()'-function * /
`

`var tts;
`

`tts = cordova.require("cordova/plugin/tts");
`

`/ * Startup & Shutdown needed for Android only * /
`

`tts.startup(successCallback, errorCallback);
`

`tts.speak("Hello World!");
`

`...
`

`tts.shutdown(successCallback, errorCallback);`
`