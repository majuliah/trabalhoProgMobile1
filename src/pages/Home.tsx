import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from '../components/Button';


interface IInformationData{

    id: string;
    name1: string;
    name2: string;
    name3: string;
}

export function Home() {
    const [newInformation1, setNewInformation1] = useState('')
    const [newInformation2, setNewInformation2] = useState('')
    const [newInformation3, setNewInformation3] = useState('')

    const [myInformations1, setMyInformations1] = useState<IInformationData[]>([])

    function handleAddNewInformation(){
        const data = {

            id: String(new Date().getTime()),
            name1: newInformation1,
            name2: newInformation2,
            name3: newInformation3,

        }
        setMyInformations1([...myInformations1, data])

        setNewInformation1('')
        setNewInformation2('')
        setNewInformation3('')
        
    }

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.title}>Hey You, Welcome!</Text>

      <TextInput style={styles.input1} placeholder='Name' placeholderTextColor='#81bb94' value={newInformation1} onChangeText={value => setNewInformation1(value)} returnKeyType={'done'}/>
      <TextInput style={styles.input2} placeholder='Telephone' placeholderTextColor='#e4c081' value={newInformation2} onChangeText={value => setNewInformation2(value)} returnKeyType={'done'} />
      <TextInput style={styles.input3} placeholder='Email' placeholderTextColor='#e6a6a6' value={newInformation3} onChangeText={value => setNewInformation3(value)} returnKeyType={'done'} />
        
        <Button />

    <ScrollView>
    {

        myInformations1.map(information => (
        <TouchableOpacity key={information.id} style={styles.buttonInformation1} activeOpacity={0.6}>
            <Text style={[styles.title, {marginTop: 5}]}>Name</Text>
            <Text style={styles.textInformation1}>{information.name1}</Text>
            <Text style={[styles.title, {marginTop: 8}]}>Telephone</Text>
            <Text style={styles.textInformation2}>{information.name2}</Text>
            <Text style={[styles.title, {marginTop: 8}]}>Email</Text>
            <Text style={styles.textInformation3}>{information.name3}</Text>
        </TouchableOpacity>
        ))
    }
    </ScrollView>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e2f0d7',
        paddingHorizontal: 30,
        paddingVertical: 70
    },
    title: {
        color: '#C56183',
        fontWeight: 'bold'
    },
    input1: {
        backgroundColor: '#81bb9461',
        color: '#81bb94',
        fontSize: 15,
        padding: Platform.OS === 'ios'? 12 : 10,
        marginTop: 12,
        borderRadius: 9
    },
    input2: {
        backgroundColor: '#faddaaa9',
        color: '#d1a14d',
        fontSize: 15,
        padding: Platform.OS === 'ios'? 12 : 10,
        marginTop: 12,
        borderRadius: 9
    },
    input3: {
        backgroundColor: '#ffbcbca9',
        color: '#c2758f',
        fontSize: 15,
        padding: Platform.OS === 'ios'? 12 : 10,
        marginTop: 12,
        borderRadius: 9
    }, 
    buttonInformation1: {
        marginBottom: 12,
        backgroundColor: '#c3aed6ca',
        padding: 15,
        borderRadius: 20,
        alignItems: 'center'
    },
    textInformation1: {
        color: '#645583',
        fontSize: 22,
        fontWeight: 'bold'
    },
    textInformation2: {
        color: '#5f4e81',
        fontSize: 17,
        fontWeight: 'bold'
    },
    textInformation3: {
        color: '#523d7c',
        fontSize: 12,
        fontWeight: 'bold'
    }
})

//aula 17/08 58min => ver flatlist