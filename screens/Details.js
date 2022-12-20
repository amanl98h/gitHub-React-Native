import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const Details = ({ route }) => {
    const navigation = useNavigation()
    const user = route.params
    console.log(user);
    return (
        <ScrollView style={styles.form}>
            <Text style={styles.main}>{user.user.name}</Text>
            <View style={styles.card}>
                <View style={styles.div}>
                    <Text style={styles.oglav}>Address</Text>
                    <Text style={styles.data}>address: {user.user.address.city}</Text>
                    <Text style={styles.data}>street: {user.user.address.street}</Text>
                    <Text style={styles.data}>company: {user.user.company.name}</Text>
                </View>
                <View style={styles.div}>
                    <Text style={styles.oglav}>Contacts</Text>
                    <Text style={styles.data}>email: {user.user.email}</Text>
                    <Text style={styles.data}>phone: {user.user.phone}</Text>
                    <Text style={styles.data}>website: {user.user.website}</Text>
                </View>
            </View>
            
        </ScrollView>
    )
}

export default Details

const styles = StyleSheet.create({
    form: {
        padding: 10,
        width: '100%',
        height: '100%',
        backgroundColor: '#A6D8D4',
    },
    main: {
        fontSize: 30,
        textAlign: 'center',
    },
    oglav: {
        marginLeft: '5%',
        fontSize: 24,
    },
    card: {
        flex: 1,
        flexDirection: 'row'
    },
    div: {
        backgroundColor: '#B9CDDA',
        width: '40%',
        margin: '5%',
        padding: '3%',
    },
    data: {
        fontSize: 16,
    }
})