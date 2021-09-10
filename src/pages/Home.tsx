import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from '../components/Button';
import { Container, Grettings, Title, Input1,
         Input2, Input3, ButtonInformation, 
         TextInformation1, TextInformation2, 
         TextInformation3 } from './styles';


interface IInformationData{

    id: string;
    name1: string;
    name2: string;
    name3: string;
}

export function Home() {
    const [newInformation1, setNewInformation1] = useState('');
    const [newInformation2, setNewInformation2] = useState('');
    const [newInformation3, setNewInformation3] = useState('');

    const [myInformations1, setMyInformations1] = useState<IInformationData[]>([]);
    const [greetings, setGreetings] = useState('');

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

    function handleRemoveInformation( id: string){
        setMyInformations1(myInformations1 => myInformations1.filter(information => information.id !== id))
    }

    useEffect(() => {
        const currentHour = new Date().getHours()
        if(currentHour < 12){
            setGreetings('Good Morning :)')
        }else if( currentHour >= 12 && currentHour < 18){
            setGreetings('Good Afternoom :)')
        }else{
            setGreetings('Good Night :)')
        }
    }, []) //tinha um myInformations dentro do colchete

    useEffect(() => {
        async function loadData(){
            const storageInformations = await AsyncStorage.getItem('@myInformations:informations')
            if (storageInformations){
                setMyInformations1(JSON.parse(storageInformations))
            }
        }
        loadData()

        // async function removeAll(){
        //     await AsyncStorage.removeItem('@myInformations:informations')
        // } //para excluir tudo :D

    }, [])

    useEffect(() => {
        async function saveData() {
            await AsyncStorage.setItem('@myInformations:informations', JSON.stringify(myInformations1))
        }
        saveData()
    }, [myInformations1])

  return (
    <>
    <Container>
      <Title>Hey You, Welcome!</Title>

      <Grettings>{greetings}</Grettings>

      <Input1 placeholder='Name' placeholderTextColor='#81bb94' value={newInformation1} onChangeText={value => setNewInformation1(value)} returnKeyType={'done'}/>
      <Input2 placeholder='Telephone' placeholderTextColor='#e4c081' value={newInformation2} onChangeText={value => setNewInformation2(value)} returnKeyType={'done'} />
      <Input3 placeholder='Email' placeholderTextColor='#e6a6a6' value={newInformation3} onChangeText={value => setNewInformation3(value)} returnKeyType={'done'} />
        
        <Button title="Submit" onPress={handleAddNewInformation} />

      <FlatList data={myInformations1} keyExtractor={item => item.id} renderItem={({ item }) => (
        <ButtonInformation activeOpacity={0.6} onPress={() => handleRemoveInformation(item.id)}>
            <Title>Name</Title>
            <TextInformation1>{item.name1}</TextInformation1>
            <Title>Telephone</Title>
            <TextInformation2>{item.name2}</TextInformation2>
            <Title>Email</Title>
            <TextInformation3>{item.name3}</TextInformation3>
        </ButtonInformation>
        )}/>

    </Container>
    </>
  )
}


