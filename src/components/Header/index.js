import React from 'react';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import {
    Dongle_300Light,
    Dongle_400Regular,
    Dongle_700Bold,
} from '@expo-google-fonts/dongle'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { Feather } from '@expo/vector-icons';
import {
    Container,
    Nome,
    Subtitulo,
    Botao,
} from './styles';

export default function Header() {

    let [fontsLoaded, error] = useFonts({
        Dongle_300Light,
        Dongle_400Regular,
        Dongle_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <Container>
            <LinearGradient
                colors={['rgba(255,242,242, 0.2)', 'rgba(81,96,96, 0.1)', 'rgba(0,0,0,0)']}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 110,
                    height: 110,
                    borderRadius: 55,
                    marginBottom: 5,
                }}
            >
                <Image
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                    source={require('../../assets/fotoperfil.jpg')}
                />
            </LinearGradient>

            <Botao onPress={() => alert('abriu a galeria')}>
                <Feather name='camera' size={20} color='#fff' />
            </Botao>

            <Nome>Raphael de Melo</Nome>
            <Subtitulo>27 anos | Desenvolvedor Mobile</Subtitulo>

        </Container >
    );
}