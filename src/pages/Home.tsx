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
    name: string;
    email: string;
    telephone: string;
    
}

export function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');

    const [myInformations, setMyInformations] = useState<IInformationData[]>([]);
    const [greetings, setGreetings] = useState('');

    function handleAddNewInformation(){
        const data = {

            id: String(new Date().getTime()),
            name: name,
            email: email,
            telephone: telephone,

        }
        setMyInformations([...myInformations, data])

        setName('')
        setEmail('')
        setTelephone('')
        
    }

    function handleRemoveInformation( id: string){
        setMyInformations(myInformations => myInformations.filter(information => information.id !== id))
    }

    useEffect(() => {
        const currentHour = new Date().getHours()
        if(currentHour < 12){
            setGreetings('Bão Dia :B')
        }else if( currentHour >= 12 && currentHour < 18){
            setGreetings('Boua Tarde :D')
        }else{
            setGreetings('Bá Noite :B')
        }
    }, [])

    useEffect(() => {
        async function loadData(){
            const storageInformations = await AsyncStorage.getItem('@myInformations:informations')
            if (storageInformations){
                setMyInformations(JSON.parse(storageInformations))
            }
        }
        loadData()

        // async function removeAll(){
        //     await AsyncStorage.removeItem('@myInformations:informations')
        // } //para excluir tudo :D

    }, [])

    useEffect(() => {
        async function saveData() {
            await AsyncStorage.setItem('@myInformations:informations', JSON.stringify(myInformations))
        }
        saveData()
    }, [myInformations])

  return (
    <>
    <Container>
      <Title>Hey You, Welcome!</Title>

      <Grettings>{greetings}</Grettings>

      <Input1 placeholder='Name' placeholderTextColor='#81bb94' value={name} onChangeText={value => setName(value)} returnKeyType={'done'}/>
      <Input2 placeholder='Telephone' placeholderTextColor='#e4c081' value={email} onChangeText={value => setEmail(value)} returnKeyType={'done'} />
      <Input3 placeholder='Email' placeholderTextColor='#e6a6a6' value={telephone} onChangeText={value => setTelephone(value)} returnKeyType={'done'} />
        
        <Button title="Submit" onPress={handleAddNewInformation} />

      <FlatList data={myInformations} keyExtractor={item => item.id} renderItem={({ item }) => (
        <ButtonInformation activeOpacity={0.6} onPress={() => handleRemoveInformation(item.id)}>

            <TextInformation1>{item.name}</TextInformation1>
            <TextInformation2>{item.email}</TextInformation2>
            <TextInformation3>{item.telephone}</TextInformation3>

        </ButtonInformation>
        )}/>

    </Container>
    </>
  )
}


