// @flow
import type { appState } from '../defs/defs.js.flow';

const initialState: appState = {
  global: {
    gui: {
      optionsWidth: 128,
    },
    DeviceBar: {
      height: 192,
    },
    TitleBar: {
      height: 22,
    },
    Transport: {
      height: 48,
    },
    constants: {
      numNotes: {
        DRUMS: 16,
        SYNTH: 127,
      },
    },
  },

  project: {
    title: '',
    tempo: 140,
    timeSignature: {
      numerator: 4,
      denominator: 4,
    },
    swing: 0.0,
    swingNote: {
      numerator: 1,
      denominator: 8,
    },

    isPlaying: false,
    isRecording: false,
    isLoopEnabled: false,
    playheadPosition: 0,

    view: {
      zoom: 1.0,
      left: 0.0,
    },

    grid: {
      numerator: 1, // max 8
      denominator: 4, // max 1024
    },
  },

  tracks: [{
    id: 0,
    name: 'Drums',
    type: 'MIDI',
    instrument: 'DRUMS',
    isArmed: true,
    timeline: [],
    gui: {
      height: 192,
    }
  }],
}

export default initialState;
