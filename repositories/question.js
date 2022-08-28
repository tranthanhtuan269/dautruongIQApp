import axios from "axios"
// https://opentdb.com/api.php?amount=50
async function getQuestions({amount}) {
    const urlGetQuestion = `https://opentdb.com/api.php?amount={amount}`
    try {
        let result = []
        let responseData = await axios.get(urlGetQuestion)
        responseData.data.data.forEach(function (item) {
            let myObject = {}
            myObject.category = item['category']
            myObject.type = item['type']
            myObject.difficulty = item['difficulty']
            myObject.question = item['question']
            myObject.correct_answer = item['correct_answer']
            myObject.incorrect_answers = item['incorrect_answers']
            result.push(myObject)
        })
        return result    
    }catch(error) {
        throw error
    }
}
//many other functions
export default {
    getQuestions
}