import React,{useState} from 'react'
import { Linking, StyleSheet, Text, View ,Button} from 'react-native'


const BasicLinking = () => {

    const [name, setName] = useState('Hammad')

    const [session, setSession] = useState({number:1,title:'Good'})

    const [status, setStatus] = useState(true)
    const onClickHandler=()=>{
        return(
            setName("Ali"),
            setSession({number:2,title:'bad'}),
            setStatus(false)
        )
    }
    return (
        <View style={styles.body}>
            <Text style={styles.text}>SubScribe My Channel {name}</Text>
            <Text style={styles.text}>SubScribe Channel Number is {session.number} and Status is  {session.title}</Text>
            <Text>{status?'Current Session':'Previous Seeion'}</Text>
            <Button style={styles.btn} title="Click Me" onPress={onClickHandler} />
        </View>
    )
}

export default BasicLinking

const styles = StyleSheet.create({
    body:{
        // flex: 1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:400,
        backgroundColor:'cyan'
    },
    text:{
        color:'white',
        fontSize:20,
        padding:20,
    },
    btn:{
        shadowOpacity:10,
        shadowColor:'black'
    },
})
