import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView, RefreshControl, SectionList } from 'react-native'



const FlatAndSection = () => {
    const [Refreshing, setRefreshing] = useState(false)

    const [items, setItems] = useState([
        { numberItem: 1, },
        { numberItem: 2, },
        { numberItem: 3, },
        { numberItem: 4, },
        { numberItem: 5, },
        { numberItem: 6, },
        { numberItem: 7, },
        { numberItem: 8, },
        { numberItem: 9, },
        { numberItem: 10, },
        { numberItem: 11, },

    ])

    const data=[
        {
            title:'Title 1',
            data:['Item 1-1','Item 1-2','Item 1-3'],
        },
        {
            title:'Title 2',
            data:['Item 2-1','Item 2-2','Item 2-3'],
        },
        {
            title:'Title 3',
            data:['Item 3-1','Item 3-2','Item 3-3'],
        },
        {
            title:'Title 4',
            data:['Item 4-1','Item 4-2','Item 4-3'],
        },
        {
            title:'Title 5',
            data:['Item 5-1','Item 5-2','Item 5-3'],
        },
    ]
    const onRefresh = () => {
                setRefreshing(true)
                setItems([...items, { key: 21, numberItem: '21' }])
                setRefreshing(false)
            }

    return (

        <SectionList
        refreshControl={
                    <RefreshControl
                        refreshing={Refreshing}
                        // onRefresh={onRefresh}
                    />
                }
        keyExtractor={(items, index) => index.toString()}
        sections={data}
        renderItem={({item})=>(
            <Text style={styles.text}>{item}</Text>
        )}
        renderSectionHeader={({section})=>(
            <View style={styles.items}>
                <Text>{section.title}</Text>
            </View>
        )}
        />

        // <FlatList
        //     keyExtractor={(items, index) => index.toString()}
        //     data={items}
        //     // Function for render item work as a map
        //     renderItem={({ item }) => {
        //         return (
        //             <View style={styles.items}  >
        //                 <Text style={styles.text}>List Number is {item.numberItem}</Text>
        //             </View>
        //         )
        //     }}
        //     refreshControl={
        //         <RefreshControl
        //             refreshing={Refreshing}
        //             onRefresh={onRefresh}
        //         />
        //     }


        // />
    )

}
//     // Use State for    false to loading and stop
//     const [Refreshing, setRefreshing] = useState(false)

//     // Function for When refresh the screen
//     const onRefresh = () => {
//         setRefreshing(true)
//         setItems([...items, { key: 21, numberItem: '21' }])
//         setRefreshing(false)
//     }
//     return (
//         // <ScrollView
//         //     style={styles.body}
//         //     refreshControl={
//         //         <RefreshControl
//         //             refreshing={Refreshing}
//         //             onRefresh={onRefresh}
//         //         />
//         //     }
//         // >
//         //     {
//         //         items.map((item) => {
//         //             return (
//         //                 <View style={styles.items} key={item.key}>
//         //                     <Text style={styles.text}>List Number is {item.numberItem}</Text>
//         //                 </View>
//         //             )
//         //         })
//         //     }
//         // </ScrollView>
//     )
// }

export default FlatAndSection

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
        // backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
