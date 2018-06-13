// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';

import TitleBar from './TitleBar.jsx';
import DeviceBar from './DeviceBar.jsx';

const styles: Object = {
  '@global': {
    body: {
      fontFamily: 'Arial',
      backgroundColor: '#34495e',
    },

    div: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      userSelect: 'none',
      cursor: 'default',
    },
  }
};

type Props = {
  classes: Object,
};

type State = {};

class App extends React.Component<Props, State> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <TitleBar />
        <DeviceBar />
      </div>
    );
  }
};

App = injectSheet(styles)(App);
export default App;
