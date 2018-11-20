import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class Footer extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>首页</Text>
        <Text>发现</Text>
        <Text>我的</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 48
  }
});