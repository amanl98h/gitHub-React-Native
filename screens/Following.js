import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getFollowing, getUser } from './../redux/actions/index';
import { useNavigation } from '@react-navigation/native';

const Following = ({route}) => {
  const user = route.params
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFollowing(user.user))
  }, [])
  const data = useSelector(s=>s.following.data)
  console.log(data);
  const navigation = useNavigation()
  return (
    <ScrollView>
      {
        data?.map((el)=>{
          return (
            <View key={el.id}>
              <View style={styles.card}>
                <Image style={styles.img}
                source={{ uri:el.avatar_url}}></Image>
                <TouchableOpacity
                onPress={()=> {navigation.navigate('Users', el.login)
                dispatch(getUser(el.login))
                }}>
                  <Text style={styles.text}>{el.login}</Text></TouchableOpacity>
              </View>
            </View>
          )
        })
      }
      <Text></Text>
    </ScrollView>
  )
}

export default Following

const styles = StyleSheet.create({
  card:{
    padding: 15,
    marginVertical: 10,
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    marginHorizontal: '10%',
    backgroundColor: 'grey',
    borderRadius: 30,
  },  
  img:{
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  text: {
    paddingLeft: 10,
    color: 'white',
    fontSize: 26,
  }
})