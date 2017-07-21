'use strict';

var Alexa = require('alexa-sdk');
var constants = require('./constants');

var stateHandlers = {
    startModeIntentHandlers : Alexa.CreateStateHandler(constants.states.START_MODE, {
        'LaunchRequest' : function () {
            this.handler.state = constants.states.START_MODE;
            var message = '<audio src="https://s3-eu-west-1.amazonaws.com/io.klerch.alexa.spieluhr/aufziehen-superslow.mp3" />';
            this.response.speak(message).audioPlayerPlay('REPLACE_ALL', constants.streamUrl, constants.tokenId, null, 0);
            this.emit(':responseReady');
        },
        'PlayAudio' : function () {
            this.handler.state = constants.states.START_MODE;
            var message = '<audio src="https://s3-eu-west-1.amazonaws.com/io.klerch.alexa.spieluhr/aufziehen-superslow.mp3" />';
            this.response.speak(message).audioPlayerPlay('REPLACE_ALL', constants.streamUrl, constants.tokenId, null, 0);
            this.emit(':responseReady');
        },
        'AMAZON.HelpIntent' : function () {
            var message = 'Diese authentische Spieluhr hilft beim Entspannen und Einschlafen. Möchtest du sie jetzt starten?';
            this.response.speak(message).listen('Möchtest du die Spieluhr jetzt starten?');
            this.emit(':responseReady');
        },
        'SessionEndedRequest' : function () {
            // No session ended logic
        },
        'Unhandled' : function () {
            var message = 'Entschuldigung, aber das habe ich nicht verstanden. Möchtest du die Spieluhr jetzt starten?';
            this.response.speak(message).listen('Möchtest du die Spieluhr jetzt starten?');
            this.emit(':responseReady');
        },
        'AMAZON.NextIntent' : function () { 
            this.response.audioPlayerPlay('REPLACE_ALL', constants.streamUrl, constants.tokenId, null, 0);
            this.emit(':responseReady');
        },
        'AMAZON.PreviousIntent' : function () { 
            this.response.audioPlayerPlay('REPLACE_ALL', constants.streamUrl, constants.tokenId, null, 0);
            this.emit(':responseReady');
        },
        'AMAZON.YesIntent' : function () { 
            var message = '<audio src="https://s3-eu-west-1.amazonaws.com/io.klerch.alexa.spieluhr/aufziehen-superslow.mp3" />';
            this.response.speak(message).audioPlayerPlay('REPLACE_ALL', constants.streamUrl, constants.tokenId, null, 0);
            this.emit(':responseReady');
        },
        'AMAZON.NoIntent' : function () { 
            var message = 'Ok.';
            this.response.speak(message);
            this.emit(':responseReady');
        },
        'AMAZON.PauseIntent' : function () { 
            this.response.audioPlayerStop();
            this.emit(':responseReady');
        },
        'AMAZON.StopIntent' : function () { 
            this.response.audioPlayerStop();
            this.emit(':responseReady');
        },
        'AMAZON.CancelIntent' : function () { 
            this.response.audioPlayerStop();
            this.emit(':responseReady');
        },
        'AMAZON.StartOverIntent' : function () { 
            var message = '<audio src="https://s3-eu-west-1.amazonaws.com/io.klerch.alexa.spieluhr/aufziehen-superslow.mp3" />';
            this.response.speak(message).audioPlayerPlay('REPLACE_ALL', constants.streamUrl, constants.tokenId, null, 0);
            this.emit(':responseReady');
        }
    })
};

module.exports = stateHandlers;
