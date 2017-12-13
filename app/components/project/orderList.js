import React,{Component} from 'react';
import {Text,View,TouchableOpacity,Button,StyleSheet,Image,TextInput,FlatList,ScrollView} from 'react-native';

export default class OrderListComponent 
extends Component{
    constructor(){
        super();
        this.state = { 
                         myList:[]
                     };
    }

    //跳转方法
    jump=(path)=>{
         this.props.navigation.navigate(path);
    }
    //获取服务期短的数据
    componentWillMount(){
        fetch('http://176.233.2.116/framework/react/fairy/data/orderList/orderList.php')
        .then(
                (response)=>{
                    return response.json();
                }
        ).then(
                (response)=>{
                    console.log(response);
                    //消除警告
                    var nowList=response.data;
                    for(var i=0;i<nowList.length;i++){
                        nowList[i].keys=i;
                    }
                    this.setState({myList:nowList});

                }
        )
    }
    //弹框
    handlePress=(index)=>{
        
    }

    //渲染列表
    showItem=(info)=>{
        //info.item是data所制定的数组的元素
        //info.index是遍历当前列表想的序号
        return  <View >
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={()=>{this.handlePress(info.index)}}>
                    <Image  style={MyStyles.myPic}   
                         source={{uri:'http://176.233.2.116/framework/react/fairy/myapp/app/'+info.item.md}} />
                    <Text style={{fontSize:10}}>{info.item.title}</Text> 
            </TouchableOpacity>
                    <Text style={{fontSize:10}}>用户:{info.item.uname}</Text>                    
            <Text>{'\n'}</Text>
        </View>
    }
    //指定效果
    render(){
        return    <FlatList renderItem={this.showItem} data={this.state.myList} />
                    
    }

}


const MyStyles= StyleSheet.create({
    myPic:{
        width:40,
        height:40,
        borderRadius:20,
        margin:10,
        marginRight:15
    }
})