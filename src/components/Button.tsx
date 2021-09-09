import React from 'react';
import { TouchableOpacity, TouchableOpacityProps ,Text, StyleSheet } from 'react-native';


interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

//type ButtonProps = TouchableOpacityProps;

export function Button({ title, ...rest }: ButtonProps){
    return(
    <>
        <TouchableOpacity style={styles.buttonAdd} activeOpacity={0.6} {...rest}>
        <Text style={styles.buttonText}>{title}</Text>
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