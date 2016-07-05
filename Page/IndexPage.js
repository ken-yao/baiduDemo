import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

import MapView from 'react-native-baidumap';
import KKLocation from 'react-native-baidumap/KKLocation';

export default class IndexPage extends Component {

  componentDidMount() {
    this.refs["mapView"].zoomToLocs([[39.918541, 116.4835]]);
    KKLocation.getCurrentPosition((position) => {
        console.log("location get current position: ", position);
    }, (error) => {
        console.log("location get current position error: ", error);
    });
    this.watchID = KKLocation.watchPosition((position) => {
        console.log("watch position: ", position);
    });
  }

  render() {
    return (
      <MapView
        style={{flex: 1}}
        ref="mapView"
        showsUserLocation={true}
        userLocationViewParams={{accuracyCircleFillColor: 'red', image: require('./start_icon.png')}}
        annotations={[{latitude: 39.832136, longitude: 116.34095, title: "start", subtile: "hello", image: require('./amap_start.png')}, {latitude: 39.902136, longitude: 116.44095, title: "end", subtile: "hello", image: require('./amap_end.png')}]}
        overlays={[{coordinates: [{latitude: 39.832136, longitude: 116.34095}, {latitude: 39.832136, longitude: 116.42095}, {latitude: 39.902136, longitude: 116.42095}, {latitude: 39.902136, longitude: 116.44095}], strokeColor: '#666666', lineWidth: 3}]}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
