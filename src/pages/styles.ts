import styled from 'styled-components/native'
import { Platform, TouchableOpacity  } from 'react-native';

export const Container = styled.View`
        flex: 1px;
        background-color: #e2f0d7;
        padding-right: 35px;
        padding-left: 35px;
        padding-top: 80px;
`;

export const Grettings = styled.Text`
        color: #794C74;
`;

export const Title = styled.Text`
        color: #C56183;
        font-size: 27px;
        font-weight: bold;
`;

export const Input1 = styled.TextInput`

        background-color: #81bb9461;
        color: #81bb94;
        font-size: 15px;
        padding: ${Platform.OS === 'ios'? '12px' : '10px'};
        margin-top: 12px;
        border-radius: 9px;
 
`;


export const Input2 = styled.TextInput`

        background-color: #faddaaa9;
        color: #d1a14d;
        font-size: 15px;
        padding: ${Platform.OS === 'ios'? '12px' : '10px'};
        margin-top: 12px;
        border-radius: 9px;

`;

export const Input3 = styled.TextInput`

        background-color: #ffbcbca9;
        color: #c2758f;
        font-size: 15px;
        padding: ${Platform.OS === 'ios'? '12px' : '10px'};
        margin-top: 12px;
        border-radius: 9px;

`;

export const ButtonInformation = styled(TouchableOpacity)`
    
        background-color: #c3aed6ca;
        padding: 15px;
        border-radius: 20px;
        align-items: center;
        margin-top: 13px;
        margin-bottom: 12px;
    
`;

export const TextInformation1 = styled.Text`

        color: #645583;
        font-size: 22px;
        font-weight: bold;
`;

export const TextInformation2 = styled.Text`
        color: #5f4e81;
        font-size: 17px;
        font-weight: bold;
`;
export const TextInformation3 = styled.Text`

        color: #523d7c;
        font-size: 12px;
        font-weight: bold;

`;
export const ButtonAdd = styled(TouchableOpacity)`
            background-color: #a2d7e7;
            padding: 15px;
            border-radius: 12px;
            align-items: center;
            margin-top: 15px;
`;

export const ButtonText = styled.Text`
        color: #52aac5;
        font-size: 18px;
        font-weight: bold;
`;