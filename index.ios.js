/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class CounterComponent extends Component {
  state = {
    count: 0
  }

  componentDidMount() {
    setInterval(()=> {
      this.setState({
        count: this.state.count+1
      })
    },1000)
  }

  render() {
    const {count} = this.state
    const {color, size} = this.props

    return(
      <Text style={{color, fontSize:size}}>
        {count}
      </Text>
    );
  }
  
}

export default class Counter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CounterComponent color={'lightblue'} size={16} />
        <CounterComponent color={'skyblue'} size={32} />
        <CounterComponent color={'steelblue'} size={80} />
        <CounterComponent color={'darkblue'} size={140} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('Counter', () => Counter);
