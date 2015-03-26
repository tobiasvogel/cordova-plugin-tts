/*
 * cordova is available under *either* the terms of the modified BSD license *or* the
 * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.
 *
 * Copyright (c) 2011, IBM Corporation
 */
/*
 * cordova is available under *either* the terms of the modified BSD license *or* the
 * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.
 * 
 * Copyright (c) 2011, IBM Corporation
 *
 * Modified by Murray Macdonald (murray@workgroup.ca) on 2012/05/30 to add pitch(), speed(), stop(), and interrupt() methods.
 */
/*
 * plugin adapted to new Cordova Plugin Interface by Tobias Vogel, <tobias.vogel@linux.com>, 2015
 *
 */

cordova.define("cordova/plugin/tts",
  function(require, exports, module) {
    var exec = require("cordova/exec");
      module.exports = {

/**
 * Play the passed in text as synthesized speech
 * 
 * @param {DOMString} text
 * @param {Object} successCallback
 * @param {Object} errorCallback
 */
        speak: function(text, successCallback, errorCallback) {
          cordova.exec(successCallback, errorCallback, "TTS", "speak", [text]);
        },

/**
 * Interrupt any existing speech, then speak the passed in text as synthesized speech
 * 
 * @param {DOMString} text
 * @param {Object} successCallback
 * @param {Object} errorCallback
 */

      interrupt: function(text, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "TTS", "interrupt", [text]);
      },

/**
 * Stop any queued synthesized speech
 * 
 * @param {DOMString} text
 * @param {Object} successCallback
 * @param {Object} errorCallback
 */

      stop: function(successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "TTS", "stop", []);
      },

/** 
 * Play silence for the number of ms passed in as duration
 * 
 * @param {long} duration
 * @param {Object} successCallback
 * @param {Object} errorCallback
 */

      silence: function(duration, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "TTS", "silence", [duration]);
      },

/** 
 * Set speed of speech.  Usable from 30 to 500.  Higher values make little difference.
 * 
 * @param {long} speed
 * @param {Object} successCallback
 * @param {Object} errorCallback
 */

      speed: function(speed, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "TTS", "speed", [speed]);
      },

/** 
 * Set pitch of speech.  Useful values are approximately 30 - 300
 * 
 * @param {long} pitch
 * @param {Object} successCallback
 * @param {Object} errorCallback
 */

      pitch: function(pitch, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "TTS", "pitch", [pitch]);
      },

/**
 * Starts up the TTS Service
 * 
 * @param {Object} successCallback
 * @param {Object} errorCallback
 */

      startup: function(successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "TTS", "startup", []);
      },

/**
 * Shuts down the TTS Service if you no longer need it.
 * 
 * @param {Object} successCallback
 * @param {Object} errorCallback
 */

      shutdown: function(successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "TTS", "shutdown", []);
      },

/**
 * Finds out if the language is currently supported by the TTS service.
 * 
 * @param {DOMSting} lang
 * @param {Object} successCallback
 * @param {Object} errorCallback
 */

      isLanguageAvailable: function(lang, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "TTS", "isLanguageAvailable", [lang]);
      },

/**
 * Finds out the current language of the TTS service.
 * 
 * @param {Object} successCallback
 * @param {Object} errorCallback
 */

      getLanguage: function(successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "TTS", "getLanguage", []);
      },

/**
 * Sets the language of the TTS service.
 * 
 * @param {DOMString} lang
 * @param {Object} successCallback
 * @param {Object} errorCallback
 */

      setLanguage: function(lang, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "TTS", "setLanguage", [lang]);
      }

    };
});

cordova.define("cordova/plugin/ttsconstants",
  function(require, exports, module) {
    module.exports = {
      STOPPED: 0,
      INITIALIZING: 1,
      STARTED: 2
    };
 });
/**
* Load TTS
*/
  if(!window.plugins) {
  window.plugins = {};
}
if (!window.plugins.tts) {
  window.plugins.tts = cordova.require("cordova/plugin/tts");
  window.TTS = cordova.require("cordova/plugin/ttsconstants");
}
