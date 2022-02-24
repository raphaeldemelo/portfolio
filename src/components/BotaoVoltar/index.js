import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import {
    Container,
} from './styles';

export default function BotaoVoltar() {

    const navigation = useNavigation();

    return (
        <Container onPress={() => navigation.navigate('Projetos')}>
            <Feather name='arrow-left' size={30} color='#fff' />
        </Container>
    );
}