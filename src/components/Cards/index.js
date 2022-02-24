import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
    Container,
    Projeto,
    Titulo,
    Subtitulo,
    Botao,
} from './styles';

export default function Cards({ data, navigatePagina }) {

    return (
        <Container onPress={() => navigatePagina(data)} >
            <Projeto>
                <Titulo>{data.projeto}</Titulo>
                <Subtitulo>{data.tecnologia}</Subtitulo>
            </Projeto>

            <Botao>
                <Feather
                    name='chevron-right'
                    size={15}
                    color='#fff'
                />
            </Botao>
        </Container>
    );
}