import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Main = () => {
    const [data, setData] = useState()
    const getUsers = async () => {
        const req = await fetch('https://jsonplaceholder.typicode.com/users')
        const res = await req.json()
        setData(res)
    }
    useEffect(() => {
        getUsers()
    }, [])

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            {
                data?.map((el, id) => {
                    return (
                        <TouchableOpacity key={el.id} style={styles.form}
                            onPress={() => navigation.navigate('Details', { user: el })}
                        >
                            <Text style={styles.text}>{id + 1}. {el.name}</Text>
                        </TouchableOpacity>
                    )
                })
            }
            <TouchableOpacity style={styles.ButtonGitHub}
                onPress={() => navigation.navigate('Users')}
            ><Text style={styles.textGitHub}>Go to Github</Text></TouchableOpacity>
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#483D3F',
        paddingHorizontal: 0,
        width: '100%',
        height: '100%',
    },
    text: {
        fontSize: 24,
        color: 'white',
        marginVertical: 5,
    },
    form: {
        margin: 10,
        padding: 4,
        marginHorizontal: '3%',
        backgroundColor: '#A39A92',
        borderRadius: 10,
        width: '60%',
    },
    panel: {
        backgroundColor: '#058ED9',
    },
    ButtonGitHub: {
        margin: 10,
        padding: 8,
        marginHorizontal: '3%',
        backgroundColor: 'white',
        borderRadius: 10,
        width: '30%',
    },
    textGitHub:{
        fontSize: 22,
    }
})