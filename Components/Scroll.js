import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, RefreshControl } from 'react-native'


const Scroll = () => {
    const [items, setItems] = useState([
        { key: 1, numberItem: 1, },
        { key: 2, numberItem: 2, },
        { key: 3, numberItem: 3, },
        { key: 4, numberItem: 4, },
        { key: 5, numberItem: 5, },
        { key: 6, numberItem: 6, },
        { key: 7, numberItem: 7, },
        { key: 8, numberItem: 8, },
        { key: 9, numberItem: 9, },
        { key: 10, numberItem: 10, },
        { key: 11, numberItem: 11, },

    ])
    // Use State for    false to loading and stop
    const [Refreshing, setRefreshing] = useState(false)

    // Function for When refresh the screen
    const onRefresh = () => {
        setRefreshing(true)
        setItems([...items, { key: 21, numberItem: '21' }])
        setRefreshing(false)
    }
    return (
        <ScrollView
            style={styles.body}
            refreshControl={
                <RefreshControl
                    refreshing={Refreshing}
                    onRefresh={onRefresh}
                />
            }
        >
            {
                items.map((item) => {
                    return (
                        <View style={styles.items} key={item.key}>
                            <Text style={styles.text}>List Number is {item.numberItem}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

export default Scroll

const styles = StyleSheet.create({

    body: {
        backgroundColor: 'white',

    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 120,
        paddingRight: 120,
        padding: 30,

        backgroundColor: 'cyan',
    },
    items: {
        margin: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
