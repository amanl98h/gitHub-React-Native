import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRepos } from '../redux/actions';

const Repos = ({route}) => {
  const user = route.params
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRepos(user.user))
  }, [])
  const data = useSelector(s=>s.repos.data)
  console.log(data);
  return (
    <View style={styles.conteiner}>
      {
        data?.map((el)=> {
          return (
            <ScrollView key={el.id} style={styles.card}>
              <Text style={styles.name}> {el.name} </Text>
              <Text style={styles.text}> public </Text>
            </ScrollView>
          )
        })
      }
    </View>
  )
}

export default Repos

const styles = StyleSheet.create({
  conteiner:{
    flexWrap: 'wrap',
    flexDirection: 'row'
  },  
  card:{
    borderColor:'black',
    borderWidth: 1,
    width: '45%',
    height: 90,
    marginHorizontal: '2%',
    margin: 10,
    borderRadius: 15,
  },
  name: {
    margin: 4,
    fontSize: 18,
  },
  text: {
    fontSize: 16,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 0.5,
    padding: 3,
    width: 50,
  }
})