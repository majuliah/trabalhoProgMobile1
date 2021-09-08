import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Platform, TouchableOpacity, ScrollView } from 'react-native';


interface IInformationData1{
    id1: string;
    name1: string;
    id2: string;
    name2: string;
    id3: string;
    name3: string;
}

// interface IInformationData2{
//     id: string;
//     name2: string;
// }

// interface IInformationData3{
//     id: string;
//     name3: string;
// }

export function Home() {
    const [newInformation1, setNewInformation1] = useState('')
    const [newInformation2, setNewInformation2] = useState('')
    const [newInformation3, setNewInformation3] = useState('')

    const [myInformations1, setMyInformations1] = useState<IInformationData1[]>([])
    // const [myInformations2, setMyInformations2] = useState<IInformationData2[]>([])
    // const [myInformations3, setMyInformations3] = useState<IInformationData3[]>([])

    function handleAddNewInformation(){
        const data = {
            id1: String(new Date().getTime()),
            name1: newInformation1,
            id2: String(new Date().getTime()),
            name2: newInformation2,
            id3: String(new Date().getTime()),
            name3: newInformation3,
        }
        setMyInformations1([...myInformations1, data])
        // setMyInformations2([...myInformations2, data])
        // setMyInformations3([...myInformations3, data])
        setNewInformation1('')
        setNewInformation2('')
        setNewInformation3('')
        
    }

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.title}>Hey You, Welcome!</Text>

      <TextInput style={styles.input1} placeholder='Name' placeholderTextColor='#81bb94' value={newInformation1} onChangeText={value => setNewInformation1(value)}/>
      <TextInput style={styles.input2} placeholder='Telephone' placeholderTextColor='#e4c081' value={newInformation2} onChangeText={value => setNewInformation2(value)}/>
      <TextInput style={styles.input3} placeholder='Email' placeholderTextColor='#e6a6a6' value={newInformation3} onChangeText={value => setNewInformation3(value)}/>
        <TouchableOpacity style={styles.buttonAdd} activeOpacity={0.6}>
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>


    <ScrollView>
    {

        myInformations1.map(information => (
        <TouchableOpacity style={styles.buttonInformation1} activeOpacity={0.6} onPress={handleAddNewInformation}>
            <Text style={[styles.title, {marginTop: 5}]}>Name</Text>
            <Text key={information.id1} style={styles.textInformation1}>{information.name1}</Text>
            <Text style={[styles.title, {marginTop: 8}]}>Telephone</Text>
            <Text key={information.id2} style={styles.textInformation2}>{information.name2}</Text>
            <Text style={[styles.title, {marginTop: 8}]}>Email</Text>
            <Text key={information.id3} style={styles.textInformation3}>{information.name3}</Text>
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
    buttonAdd: {
        backgroundColor: '#a2d7e7',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 15
    },
    buttonText: {
        color: '#52aac5',
        fontSize: 18,
        fontWeight: 'bold',
        
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

//não está retornando as informações D: