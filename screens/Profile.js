import React, {useState, useEffect} from 'react';
import {
    Text, 
    View,
    Image,
    Dimensions
} from 'react-native'
import {images, colors, icons, fontSizes} from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { convertDateTimeToString } from '../utilies/DateTime';
import {
    user as UserRepository
} from '../repositories'
import { SafeAreaView } from 'react-navigation';

function Profile(props) {
    const [user, setUser] = useState({})    

    useEffect(() => {        
        UserRepository.getUserDetail()
            .then(responseUser => setUser(responseUser))          
    },[])

    const {email, dateOfBirth, 
        gender,userId, 
        address, username, url, 
        phone, registeredDate } = user
    
    return <SafeAreaView style={{
            flex: 1,                    
            paddingTop: 50,
            paddingStart: 20,
        }}>
        <Image
            style={{
                width: 160,
                height: 160,
                resizeMode: 'cover',
                borderRadius: 80,
                alignSelf: 'center',
                marginBottom: 20,
            }}
            source={{
                uri: url
            }} />
        <View style={{flexDirection: 'row'}}>
            <Text style={{
                fontWeight: 'bold',                 
                fontSize: fontSizes.h5}}>Username:  </Text>
            <Text>{username}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', fontSize: fontSizes.h5}}>Email:  </Text>
            <Text>{email}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', fontSize: fontSizes.h5}}>DOB:  </Text>
            <Text>{convertDateTimeToString(dateOfBirth)}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', fontSize: fontSizes.h5}}>Gender:  </Text>
            <Text>{gender}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', fontSize: fontSizes.h5}}>Address:  </Text>
            <Text>{address}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', fontSize: fontSizes.h5}}>Phone:  </Text>
            <Text>{phone}</Text>
        </View>
    </SafeAreaView>
}
export default Profile