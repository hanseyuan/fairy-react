import React,{Component} from 'react';
import {Text,View,Button,TextInput,Image,ActivityIndicator}
 from 'react-native';

export default class LoginComponent extends Component{

    constructor(){
        super();
        this.state = {  uName:'',
                        uPwd:'',
                        isLoadingShow:false
                     };
    }

     handleChangeName=(msg)=>{
       this.setState({uName:msg});
    }
    handleChangePwd=(msg)=>{
       this.setState({uPwd:msg});
    }
    //跳转方法
    jump=(path)=>{
         this.props.navigation.navigate(path);
    }

    doLogin=()=>{
        // console.log(this.state);
        //修改isloadingshow,加载窗口
        this.setState({isLoadingShow:true});
        var timer=setTimeout(()=>{  
            clearTimeout(timer);
            fetch('http://176.233.2.116/framework/react/fairy/data/login/login.php?uname='+this.state.uName+'&upwd='+this.state.uPwd)
            .then(
                (response)=>{
                    return response.json();
                }
            ).then(
                (response)=>{
                    console.log(response);
                    if(response.code==1){
                        this.setState({isLoadingShow:false});
                        this.jump('main');
                    }

                }
            )
         
        },3000)


    }



    render(){
        return <View>
                <Image  style={{width:100,height:100,borderRadius:50,alignSelf:'center'}}
                        source={require('../../img/avatar/1.jpg')}></Image>
                <TextInput onChangeText={this.handleChangeName}  placeholder="请输入用户名"></TextInput>
                <TextInput  onChangeText={this.handleChangePwd} secureTextEntry={true} placeholder="请输入密码"></TextInput>
                <Button  onPress={this.doLogin}
                 title="登录" ></Button>
                 <View>
                     {
                         this.state.isLoadingShow&&
                         <View style={{alignItems:'center'}}>
                             <ActivityIndicator></ActivityIndicator>
                             <Text>loading</Text>
                         </View>
                     }
                 </View>
            </View>
    }

}