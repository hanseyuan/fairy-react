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

import {StackNavigator} from 'react-navigation';

import LoginComponent  from './app/components/project/login';
import MainComponent  from './app/components/project/main';
import ProductListComponent  from './app/components/project/productList';
import UserListComponent  from './app/components/project/userList';
import OrderListComponent  from './app/components/project/orderList';
import LoginOutComponent  from './app/components/project/setting';


const myNavigator=StackNavigator({
    login:{screen:LoginComponent,
      navigationOptions:()=>{
        return {
          headerTitle:'登录',
          headerLeft:null,
          headerTitleStyle:{alignSelf:'center',color:'#ff0000'}
        }
      }
    },
    loginout:{screen:LoginOutComponent,
      navigationOptions:()=>{
        return {
          headerTitle:'退出登录',
          headerLeft:null,
          headerTitleStyle:{alignSelf:'center',color:'#ff0000'}
        }
      }
    },
    main:{screen: MainComponent,
       navigationOptions:()=>{
        return {
          headerTitle:'页面管理',
           headerLeft:null,
          headerTitleStyle:{alignSelf:'center'}
        }
      }
    },
    orderList:{screen:OrderListComponent ,
      navigationOptions:()=>{
        return {
          headerTitle:'订单列表',
          headerLeft:null,
          headerTitleStyle:{alignSelf:'center'}
        }
      }
    },
    productList:{screen:ProductListComponent ,
      navigationOptions:()=>{
        return {
          headerTitle:'商品列表',
          headerLeft:null,
          headerTitleStyle:{alignSelf:'center'}
        }
      }
    },
    userList:{screen:UserListComponent ,
      navigationOptions:()=>{
        return {
          headerTitle:'用户列表',
          headerLeft:null,
          headerTitleStyle:{alignSelf:'center'}
        }
      }
    }
});


AppRegistry.registerComponent('myapp', () =>myNavigator);
