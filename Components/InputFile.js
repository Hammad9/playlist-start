import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'


const InputFile = () => {
    const [name, setName] = useState('')
    return (
        <View style={styles.body}>
            <Text>Please Write Your Name</Text>
            <TextInput
            multiline   //When Click on Enter Button its create multi line editor
            style={styles.inputStyle}
            placeholder="Pease Enter Your Name"
            onChangeText={(val)=>setName(val)}
            // editable={false}   show butt no editable
            secureTextEntry   //Typing show dot not show text
            />
            <Text>Your Name is :{name}</Text>
        </View>
    )
}

export default InputFile

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
    }
})
