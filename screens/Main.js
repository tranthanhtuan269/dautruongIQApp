import React, {useState, useEffect} from 'react';
import {
    Text, 
    View,
    Image
} from 'react-native'
import {images, colors, icons, fontSizes} from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { convertDateTimeToString } from '../utilies/DateTime';
import {
    question as QuestionRepository,    
} from '../repositories' 
import { SafeAreaView } from 'react-navigation';

function Main(props) {
    const [questions, setQuestions] = useState([])        
    //call when component loaded => componentDidMount    
    useEffect(() => {           
        QuestionRepository.getQuestions({
            amount: 50
        }).then(responseQuestions => setQuestions(responseQuestions))    
    },[])

    return <SafeAreaView style={{
            flex: 1,                    
            paddingTop: 50,
            paddingStart: 20,
        }}>
        <View>      
            <Text>{JSON.stringify(questions)}</Text>      
        </View>
    </SafeAreaView>
}
export default Main