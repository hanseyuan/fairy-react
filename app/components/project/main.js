import React,{Component} from 'react';
import {Text,View,Button,Image,TouchableOpacity,StyleSheet,ScrollView}
 from 'react-native';

export default class MainComponent 
extends Component{

    //跳转方法
    jump=(path)=>{
         this.props.navigation.navigate(path);
    }

    render(){
        return <ScrollView style={{backgroundColor:'powderblue' ,flex:1}}>
                    {/*第一行*/}
                    <View style={{flexDirection:'row'}}>    
                        <View  style={MyStyle.myTop}>
                            <Text style={MyStyle.myRed}>200</Text>
                            <Text>当日PC端PV量</Text>
                        </View>
                        <View  style={MyStyle.myTop}>
                            <Text style={MyStyle.myGreen}>230</Text>
                            <Text>移动端PV量</Text>
                        </View>
                    </View>
                    {/*第二行*/}
                    <View style={{flexDirection:'row'}}>
                        <View  style={MyStyle.myTop}>
                            <Text style={MyStyle.myRed}>1020</Text>
                            <Text>已完成订单总数</Text>
                        </View>
                        <View  style={MyStyle.myTop}>
                            <Text  style={MyStyle.myGreen}>200</Text>
                            <Text>当日App下载量</Text>
                        </View>
                    </View>


                    <Text>{'\n'}</Text>
                    {/*第三行*/}
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity  onPress={()=>{this.jump('orderList')}}    style={MyStyle.myButtom}>
                            <Image  style={MyStyle.myPic}
                            source={require('../../img/order.png')}></Image>
                            <Text>订单管理</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=>{this.jump('userList')}}  style={MyStyle.myButtom}> 
                            <Image  style={MyStyle.myPic}
                            source={require('../../img/user.png')}></Image>
                            <Text>用户管理</Text>
                         </TouchableOpacity>
                    </View>
                    {/*第四行*/}
                    <View  style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>{this.jump('productList')}} style={MyStyle.myButtom}>
                            <Image  style={MyStyle.myPic}
                            source={require('../../img/product.png')}></Image>
                            <Text>商品管理</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={()=>{this.jump('loginout')}} style={MyStyle.myButtom}>
                            <Image  style={MyStyle.myPic}
                            source={require('../../img/setting.png')}></Image>
                            <Text>设置</Text>
                         </TouchableOpacity>
                    </View>
                </ScrollView>
    }

}

const MyStyle= StyleSheet.create({
    myTop:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#e6e6e6',
        borderRightWidth:2,
        borderBottomWidth:2,
        height:100
    },
    myPic:{
       width:60,
       height:60, 
    },
    myRed:{
        color:'#ED460D',
        fontSize:20
    },
    myGreen:{
        color:'green',
        fontSize:20
    },
    myButtom:{
         flex:1,
        alignItems:'center',
        justifyContent:'center',
    }

})