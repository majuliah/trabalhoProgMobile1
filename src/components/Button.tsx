import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


export function Button(){
    return(
        <>
        <TouchableOpacity style={styles.buttonAdd} activeOpacity={0.6} /*onPress={handleAddNewInformation}*/>
        <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
    </>
    )
}

const styles = StyleSheet.create({
    buttonAdd: {
        backgroundColor: '#a2d7e7',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginVertical: 15
    },
    buttonText: {
        color: '#52aac5',
        fontSize: 18,
        fontWeight: 'bold',
        
    },
})