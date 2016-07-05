import React, { Component } from 'react';
import { AppRegistry, StyleSheet, DrawerLayoutAndroid, Navigator, Text, View, TouchableOpacity} from 'react-native';

import IndexPage from './Page/IndexPage';
import TestPage from './Page/TestPage';

class baiduDemo extends Component {
  constructor(props){
    super(props);
  }

  openDrawer(){
      this.refs['DRAWER'].openDrawer();
  };

  closeDrawer(){
      this.refs['DRAWER'].closeDrawer();
  }

  goTo(n) {
      nav.push({
          id: n.id,
      });
      this.closeDrawer();
  }


  renderScene(route, nav) {
      switch (route.id){
          case 'Index':
              return (<IndexPage navigator={nav} {...this.props} {...route.passProps} openDrawer={this.openDrawer.bind(this)} />);
              break;
          case 'Test':
              return (<TestPage navigator={nav} {...this.props} {...route.passProps} />);
              break;
          default:
              return (<IndexPage navigator={nav} {...this.props} {...route.passProps} openDrawer={this.openDrawer.bind(this)} />);
              break;
        }
  	}

  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <TouchableOpacity style={{margin:10,height:32,borderBottomWidth:0.5,borderColor:'#ddd'}} activeOpacity={0.7} onPress={() => this.goTo({id: 'Index'})}>
          <Text style={{fontSize:16,lineHeight:32}}>IndexPage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{margin:10,height:32,borderBottomWidth:0.5,borderColor:'#ddd'}} activeOpacity={0.7} onPress={() => this.goTo({id: 'Test'})}>
          <Text style={{fontSize:16,lineHeight:32}}>TestPage</Text>
        </TouchableOpacity>
      </View>
    );

    return (
      <DrawerLayoutAndroid
          ref={'DRAWER'}
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}>
          <View style={{flex: 1}}>
            <Navigator
                initialRoute={{id:'Index'}}
                ref={((nav) => { global.nav = nav })}
                renderScene={this.renderScene.bind(this)}
                configureScene={(route) => {
                    if (route.sceneConfig) {
                      return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.FloatFromRight;
                }}
            />
          </View>
      </DrawerLayoutAndroid>
    );
  }
}


AppRegistry.registerComponent('baiduDemo', () => baiduDemo);
