import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Flexed = () => {
    return (
        <View style={{flex:1,backgroundColor:'red'}}>
            <Text style={{flex:0.30,backgroundColor:'green'}}>Hammadkaskdfjkls</Text>
        </View>
    )
}

export default Flexed

const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'red',
    }
})
