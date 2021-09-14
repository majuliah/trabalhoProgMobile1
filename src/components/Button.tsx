import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonAdd, ButtonText } from '../pages/styles';


interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps){
    return(
    <>
        <ButtonAdd activeOpacity={0.6} {...rest}>
        <ButtonText>{title}</ButtonText>
        </ButtonAdd>
    </>
    )
}

