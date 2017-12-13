import React,{Component} from 'react';
import {Text,View,Button,TextInput,Image,ActivityIndicator}
 from 'react-native';

export default class LoginOutComponent extends Component{

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

    LoginOut=()=>{
         console.log(this.state);
        //修改isloadingshow,加载窗口
        this.setState({isLoadingShow:true});
        var timer=setTimeout(()=>{  
            clearTimeout(timer);
            fetch('http://176.233.2.116/framework/react/fairy/data/header/logout.php')
            .then(
                (response)=>{
                    return response.json();
                }
            ).then(
                (response)=>{
                    console.log(response);
                    if(response.code==1){
                        this.setState({isLoadingShow:false});
                        this.jump('login');
                    }

                }
            )
         
        },3000)


    }



    render(){
        return <View>
                <Image  style={{width:100,height:100,borderRadius:50,alignSelf:'center'}}
                        source={require('../../img/avatar/1.jpg')}></Image>
                <Button  onPress={this.LoginOut}
                 title="退出登录" ></Button>
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