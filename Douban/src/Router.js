import React, { Component } from 'react';
import {  
    View, 
    Text, 
    Image,
} from 'react-native';

import { 
    createBottomTabNavigator,
    createStackNavigator,
 } from "react-navigation";

 import moduleName from 'react';

import DBBookView from "./features/book/DBBookView";
import DBMovieView from './features/movie/DBMovieView';
import DBMusicView from './features/music/DBMusicView';
import DBLocationView from './features/location/DBLocationView';

// 书
const bookStackNavigator = createStackNavigator({
    DBBookView: DBBookView,
    
});

// 电影
const movieStackNavigator = createStackNavigator({
    DBMovieView: DBMovieView,
    
});

// 音乐
const musicStackNavigator = createStackNavigator({
    DBMusicView: DBMusicView,
    
});

// 同城
const locationStackNavigator = createStackNavigator({
    DBLocationView: DBLocationView,
    
});

const TabBarNavigator = createBottomTabNavigator(
    {
        Book: {
            screen: bookStackNavigator,
            navigationOptions: {
                tabBarLabel: "图书",
                tabBarIcon: (focused, tintColor) => (
                    <Image source={ focused ? require('./assets/tabbar/db_book_selected.png') : require('./assets/tabbar/db_book_normal.png')}/>
                )
                
            },
        },
        
        Movie: {
            screen: movieStackNavigator,
            navigationOptions: {
                tabBarLabel: "电影",
                tabBarIcon: (focused, tintColor) => (
                    <Image source={ focused ? require('./assets/tabbar/db_movie_selected.png') : require('./assets/tabbar/db_movie_normal.png')}/>
                )
            },
        },
        Muisc: {
            screen: musicStackNavigator,
            navigationOptions: {
                tabBarLabel: "音乐",
                tabBarIcon: (focused, tintColor) => (
                    <Image source={ focused ? require('./assets/tabbar/db_music_selected.png') : require('./assets/tabbar/db_music_normal.png')}/>
                )
            },
        },
        Location: {
            screen: locationStackNavigator,
            navigationOptions: {
                tabBarLabel: "同城",
                tabBarIcon: (focused, tintColor) => (
                    <Image source={ focused ? require('./assets/tabbar/db_location_selected.png') : require('./assets/tabbar/db_location_normal.png')}/>
                )
            },
        },
    },
    {
        
        tabBarOptions: {
            inactiveTintColor: '#515151',
            activeTintColor: '#4c8dae',
            labelStyle: {
              fontSize: 12,
            },
        }
    }
);

export default class Router extends Component<Props> {
    render(){
        return <TabBarNavigator/>;
    }
}
