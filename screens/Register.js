import React, {useState, useEffect} from 'react';
import {
    Text, 
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Keyboard
} from 'react-native'

import {images, colors, icons, fontSizes, configs} from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {isValidEmail, isValidPassword} from '../utilies/Validations'

function Register(props) {
    //states for validating
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    //states to store email/password
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [retypePassword, setRetypePassword] = useState('')
    const isValidationOK = () => email.length > 0 && password.length > 0
                            && isValidEmail(email) == true
                            && isValidPassword(password) == true
                            && password == retypePassword

    return <View     
    style={{
        flex: 100,
        backgroundColor: colors.primary
    }}>
        <View style={{
            flex: 20,
            flexDirection: 'row',            
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <Image
                source={
                    images.man
                } style={{
                    width: 60,
                    height: 60,
                    alignSelf: 'center'
                }} />
            <Text style={{
                color: 'white',
                fontSize: fontSizes.h2,
                fontWeight: 'bold',
                width: '50%'
            }}>{configs.haveAccountQuestion}</Text>
            <Image
                source={
                    images.woman
                } style={{
                    width: 60,
                    height: 60,
                    alignSelf: 'center'
                }} />
        </View>
        <View style={{
            flex: 75,
            backgroundColor: 'white',
            padding: 10,
            margin: 10,
            borderRadius: 20,
        }}>
            <View style={{
                marginHorizontal: 15
            }}>
                <Text style={{
                    fontSize: fontSizes.h6,
                    color: colors.primary
                }}>Email:</Text>
                <TextInput
                    onChangeText={(text)=>{
                       setErrorEmail(isValidEmail(text) == true ? 
                                    '' : 'Email không đúng định dạng')
                       setEmail(text)    
                    }}
                    style={{
                        color: 'black'
                    }}
                    placeholder='Email của bạn'
                    value={email}
                    placeholderTextColor={colors.placeholder}
                />
                <View style={{height: 1, 
                    backgroundColor: colors.primary, 
                    width: '100%',                    
                    marginHorizontal: 15,
                    marginBottom: 5,
                    alignSelf: 'center'
                }} />
                <Text style={{
                    color: 'red', 
                    fontSize: fontSizes.h6,
                    marginBottom: 10,
                    }}>{errorEmail}</Text>
            </View>
            <View style={{
                marginHorizontal: 15
            }}>
                <Text style={{
                    fontSize: fontSizes.h6,
                    color: colors.primary
                }}>Password:</Text>
                <TextInput
                    onChangeText={(text)=>{
                        setErrorPassword(isValidPassword(text) == true ? 
                                    '' : 'Mật khẩu phải lớn hơn 3 ký tự')
                        setPassword(text)    
                    }}
                    style={{
                        color: 'black'
                    }}
                    secureTextEntry={true}
                    value={password}
                    placeholder='Mật khẩu của bạn'
                    placeholderTextColor={colors.placeholder}
                />
                <View style={{height: 1, 
                    backgroundColor: colors.primary, 
                    width: '100%',
                    marginBottom: 10,
                    marginHorizontal: 15,
                    alignSelf: 'center'
                }} />
                <Text style={{
                    color: 'red', 
                    fontSize: fontSizes.h6,
                    marginBottom: 15,                    
                    }}>{errorPassword}</Text>
            </View>
            <View style={{
                marginHorizontal: 15,
            }}>
                <Text style={{
                    fontSize: fontSizes.h6,
                    color: colors.primary
                }}>Retype password:</Text>
                <TextInput
                    onChangeText={(text)=>{
                        setErrorPassword(isValidPassword(text) == true ? 
                                    '' : 'Mật khẩu phải lớn hơn 3 ký tự')
                        setRetypePassword(text)                                    
                    }}
                    style={{
                        color: 'black'
                    }}
                    value={retypePassword}
                    secureTextEntry={true}
                    placeholder='Nhập lại mật khẩu'
                    placeholderTextColor={colors.placeholder}
                />
                <View style={{height: 1, 
                    backgroundColor: colors.primary, 
                    width: '100%',
                    marginBottom: 10,
                    marginHorizontal: 15,
                    alignSelf: 'center'
                }} />
                <Text style={{
                    color: 'red', 
                    fontSize: fontSizes.h6,
                    marginBottom: 5,                    
                    }}>{errorPassword}</Text>

                <TouchableOpacity
                    disabled = {isValidationOK() == false}
                    onPress={() => {
                        alert(1)
                    }}
                    style={{
                        backgroundColor: isValidationOK() == true 
                                            ? colors.primary: colors.inactive,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '50%',
                        alignSelf: 'center',
                        marginTop: 10,
                        borderRadius: 18
                    }}>
                    <Text style={{
                        padding: 8,
                        fontSize: fontSizes.h5,
                        color: 'white'
                    }}>Đăng ký</Text>
                </TouchableOpacity>  
            </View>
        </View>
        
        <View style={{
            flex: 20,            
        }}>
            <View style={{
                height: 40,
                flexDirection: 'row',   
                alignItems: 'center',
                marginHorizontal: 20
            }}>
                <View style={{height: 1, backgroundColor: 'white', flex: 1}} />
                <Text style={{
                    padding: 8,
                    fontSize: fontSizes.h6,
                    color: 'white',
                    alignSelf: 'center',
                    marginHorizontal: 5,
                }}>Sử dụng cách khác?</Text>
                <View style={{height: 1, backgroundColor: 'white', flex: 1}} />
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <Icon name='facebook' size={35} color={colors.facebook} />
                <View style={{width: 15}}/>
                <Icon name='google' size={35} color={colors.google} />
            </View>

        </View>
    </View>    

}
export default Register