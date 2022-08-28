import React, {useState, useEffect} from 'react';
import {
    TouchableOpacity,
    ImageBackground,
    Text,
    View,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import {UIButton} from '../components'

import {colors, fontSizes, configs} from '../constants'
import config from '../constants/config';

function Welcome(props){
    const [accountTypes, setAccountTypes] = useState([
        {
            name: 'Chơi thử',
            isSelected: true,
        }, 
        {
            name: 'Chiến đấu',
            isSelected: false,
        }      
    ]) 

    return <View style={{
            backgroundColor: 'black',
            flex: 100,
        }}>
            <ImageBackground source={require('../assets/background.jpeg')} style={{flex:100}} resizeMode='cover'>
                <View style={{                
                    flex: 20,                                
                }}>
                    <View style={{
                        flexDirection: 'row',
                        height: 50,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        backgroundColor: 'red'
                    }}>
                        <Image source={require('../assets/icon_fire.png')} 
                        style={{
                            marginStart: 10,
                            marginEnd: 5,
                            width: 30,
                            height: 30,
                        }}/>
                        <Text style={{
                            color: 'white'
                        }}>{configs.appName}</Text>
                        <View style={{ flex: 1 }} />
                        <Icon name={'question-circle'}
                            color={'white'}
                            size={20}
                            style={{                            
                                marginEnd: 20
                            }}
                        />
                    </View>
                    <View style={{
                        flex: 50,
                        width: '100%',                                
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} >
                        <Image source={require('../assets/quiz.png')} 
                        style={{
                            marginStart: 10,
                            marginEnd: 5,
                            width: 100,
                            height: 100,
                        }}/>
                    </View>
                    <View style={{
                        flex: 20,
                        width: '100%',                                
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} >
                        <Text style={{
                                marginBottom: 7, 
                                color: 'white',
                                fontSize: fontSizes.h6
                            }}>{configs.welcomeText}</Text>
                        <Text style={{ 
                            marginBottom: 7, 
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: fontSizes.h5,
                        }}>{configs.appName} !</Text>
                    </View>
                    <View style={{
                        flex: 60,                    
                    }}>
                        <UIButton 
                            onPress={() => {
                                // navigate('Login')
                            }}
                            title={config.loginText}/>
                        <Text style={{                     
                            color: 'white',
                            fontSize: fontSizes.h6, 
                            alignSelf: 'center',
                            marginTop: 10
                        }}>{configs.registerQuestionText}</Text>
                        <TouchableOpacity 
                            onPress={()=>{
                                //alert('press register')
                                // navigate('Register')
                            }}
                            style={{
                            padding: 5
                            }
                        }>
                            <Text style={{
                                color: colors.primary,
                                fontSize: fontSizes.h6,
                                alignSelf: 'center',
                                textDecorationLine: 'underline',
                            }}>{configs.registerText}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
}

export default Welcome