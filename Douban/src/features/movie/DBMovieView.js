import React, { Component } from 'react';
import {  
    View, 
    Text, 
} from 'react-native';

export default class DBMovieView extends Component {

    static navigationOptions = ({navigation, navigationOptions}) => {

        return ({
            title: "电影",
        });
    };


  render() {
    return (
      <View>
        <Text> DBMovieView </Text>
      </View>
    );
  }
}
