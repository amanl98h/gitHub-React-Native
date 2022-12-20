import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import React from 'react'
import { getUser } from '../redux/actions';
import { useNavigation } from '@react-navigation/native';

const Users = () => {
    const [text, onChangeText] = React.useState();
    const dispatch = useDispatch()
    const click = () => {
        dispatch(getUser(text))
    }
    const data = useSelector((s) => s.user)
    // console.log(data);
    const navigation = useNavigation()
    return (
        <View>
            <View style={styles.search}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <TouchableOpacity style={styles.buttonsearch}
                    onPress={click}>
                    <Text style={styles.usertext}>Search</Text>
                </TouchableOpacity></View>
            {/* <TouchableOpacity
                onPress={() => navigation.navigate('Following')}
            ><Text>Go to Following</Text></TouchableOpacity> */}
            {
                data.length == 0 ? <Text style={styles.not}>Enter the name user</Text>
                    : <View style={styles.conteiner}>
                        <View style={styles.card}>
                            <Image style={styles.imgLogo}
                                source={{ uri: data?.data.avatar_url, }}></Image>
                            <Text style={styles.card_text}>{data?.data.name}</Text>
                            <Text style={styles.card_text}>{data?.data.login}</Text>
                            <Text style={styles.card_text}>{data?.data.bio}</Text>
                        </View>
                        <View style={styles.foll}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Following', { user: data?.data.login })}>
                                <Text style={styles.usertext}>{data?.data.following} following</Text></TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Follower', { user: data?.data.login })}>
                                <Text style={styles.usertext}>{data?.data.followers} followers</Text></TouchableOpacity>

                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Repositories', { user: data?.data.login })}>
                            <Text style={styles.usertext}>{data?.data.public_repos} Repositories</Text></TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.usertext}>Follow</Text>
                        </TouchableOpacity>
                    </View>
            }

        </View>
    )
}

export default Users

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        height: 40,
        margin: 12,
        width: '80%',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        color: 'grey',
    },
    buttonsearch: {
        backgroundColor: '#908C8C',
        padding: 8,
        borderRadius: 10,
    },
    imgLogo: {
        width: 300,
        height: 300,
        borderRadius: 150,
        backgroundColor: '#050616',
        borderWidth: 1,
        borderColor: '#050616',
    },
    foll: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
    },
    usertext: {
        fontSize: 20,
        // backgroundColor: 'red',
    },
    search: {
        flexDirection: 'row',
        width: '60%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    conteiner: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 500,
        alignItems: 'center',
    },
    card: {
        alignItems: 'center',
    },
    card_text: {
        fontSize: 28,
    },
    not: {
        fontSize: 22,
        marginVertical: '5%',
        paddingHorizontal: '4%',
    }
})