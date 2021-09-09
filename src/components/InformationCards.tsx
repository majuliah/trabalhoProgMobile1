import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function InformationCards() {

    return(
        <>
        <TouchableOpacity  style={styles.buttonInformation1} activeOpacity={0.6}>
        <Text style={[styles.title, {marginTop: 5}]}>Name</Text>
        <Text style={styles.textInformation1}>Nome</Text>
        <Text style={[styles.title, {marginTop: 8}]}>Telephone</Text>
        <Text style={styles.textInformation2}>Email</Text>
        <Text style={[styles.title, {marginTop: 8}]}>Email</Text>
        <Text style={styles.textInformation3}>Telefone</Text>
    </TouchableOpacity>
    </>
    )
}





const styles = StyleSheet.create({
    title: {
        color: '#C56183',
        fontWeight: 'bold'
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