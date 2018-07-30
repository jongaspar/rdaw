// @flow
import React from 'react';
import Konva from "konva";
import { connect } from 'react-redux';
import { Stage, Layer, Image, Rect } from "react-konva";
import GridLines from './GridLines.jsx';
import Notes from './Notes.jsx';
import { arrayFrom } from '../../../../util/arrays';

type Props = {
  containerWidth: number,
  containerHeight: number,
  timeline: Array<Array<Object>>,
  instrument: string,
  numNotes: Object,
};

type State = {};

class Sequencer extends React.Component<Props, State> {
  render() {
    const {
      containerWidth,
      containerHeight,
      timeline,
      instrument,
      numNotes,
    } = this.props;

    const noteWidth = 32;
    const noteHeight = containerHeight / numNotes[instrument];

    return (
      <Stage
        width={containerWidth}
        height={containerHeight}
      >
        <GridLines
          horizontal
          hStart={0}
          hEnd={containerHeight}
          hLength={containerWidth}
          hSpacing={noteWidth}
          hColor='#666'
          vertical
          vStart={0}
          vEnd={containerWidth}
          vLength={containerHeight}
          vSpacing={noteHeight}
          vColor='#555'
        />

        <Notes
          timeline={timeline}
          noteWidth={noteWidth}
          noteHeight={noteHeight}
        />
      </Stage>
    );
  }
}


const mapStateToProps = state => {
  return {
    numNotes: state.global.constants.numNotes,
  }
}

Sequencer = connect(mapStateToProps)(Sequencer);
export default Sequencer;
