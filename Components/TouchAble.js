import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity } from 'react-native'



const TouchAble = () => {
    const [name, setName] = useState('')

    const [submitted, setSubmitted] = useState(false)

    const changeText=()=>{
        return(
            setSubmitted(!submitted)
             
        )
        
    }
    return (
        <TouchableOpacity style={styles.body}>
            <Text>Please Write Your Name</Text>
            <TextInput
            multiline   //When Click on Enter Button its create multi line editor
            style={styles.inputStyle}
            placeholder="Pease Enter Your Name"
            onChangeText={(val)=>setName(val)}
            
            
            />
            <Button 
            style={{backgroundColor:'red',}}
            title={submitted?'Clear':'Click Me'}
            onPress={changeText}
            />
            {
                submitted?<Text>Your Are Register as :{name}</Text>:null
            }
        </TouchableOpacity>
    )
}

export default TouchAble

const styles = StyleSheet.create({
    body:{
        flex:1,
        // justifyContent:'center',
        marginTop:40,
        alignItems:'center',
        backgroundColor:'cyan',
        
    },
    inputStyle:{
        borderColor:'black',
        padding:10,
        paddingLeft:80,
        paddingRight:80,
        borderWidth:2,
        borderRadius:10,
        textAlign:'center',
        fontSize:20,
    },
    buttonStyle:{
        backgroundColor:'blue',
        padding:20,
    }
})
