'use strict';

var Alexa = require('alexa-sdk');
var constants = require('./constants');

// Binding audio handlers to PLAY_MODE State since they are expected only in this mode.
var audioEventHandlers = Alexa.CreateStateHandler(constants.states.PLAY_MODE, {
    'PlaybackStarted' : function () {
        console.log("PlaybackStarted");
    },
    'PlaybackFinished' : function () {
        console.log("PlaybackFinished");
    },
    'PlaybackStopped' : function () {
        console.log("PlaybackStopped");
    },
    'PlaybackNearlyFinished' : function () {
        if (this.event.request.token === constants.tokenForeverId) {
            this.response.audioPlayerPlay('ENQUEUE', constants.streamUrl, constants.tokenForeverId, null, 0);
            this.emit(':responseReady');
            console.log("PlaybackNearlyFinished enqueue");
        } else {
            console.log("PlaybackNearlyFinished do nothing");
        }
    },
    'PlaybackFailed' : function () {
        console.log("Playback Failed : %j", this.event.request.error);
        this.context.succeed(true);
    }
});

module.exports = audioEventHandlers;