// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Konva from "konva";
import { Stage, Layer, Image, Rect } from "react-konva";
import GridLine from './GridLine.jsx';
import { arrayFrom } from '../../../../util/arrays';

const styles: Object = {
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  }
}

type Props = {
  classes: Object,
  dimensions: Object,
};

type State = {};

class Timeline extends React.Component<Props, State> {
  render() {
    const { classes, dimensions } = this.props
    const widthUnits = arrayFrom(0, dimensions.width);

    const verticalGridLines = widthUnits.map((unit: number, index: number): ?Object => {
      if (index % 32 === 0) {
        return (
          <GridLine
            key={index}
            x1={index}
            y1={0}
            x2={index}
            y2={dimensions.height}
            color="grey"
          />
        )
      }
    })

    return (
      <Stage
        width={dimensions.width}
        height={dimensions.height}
      >
        <Layer>
          {verticalGridLines}
        </Layer>
      </Stage>
    );
  }
}

Timeline = injectSheet(styles)(Timeline);
export default Timeline;
