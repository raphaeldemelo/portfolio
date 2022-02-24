import React from 'react';
import { Image } from 'react-native';
import {
    Container,
    Nome,
    ConteudoTech,
} from './styles';

import {
    Dongle_300Light,
    Dongle_400Regular,
    Dongle_700Bold,
} from '@expo-google-fonts/dongle'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function Tecnologias() {


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
            <Nome style={{ marginLeft: 10 }}>Tecnologias</Nome>

            <ConteudoTech>
                <Image
                    style={{ width: 67, height: 67 }}
                    source={require('../../assets/react-native-icon.png')}
                />


                <Image
                    style={{ width: 67, height: 67 }}
                    source={require('../../assets/firebase.png')}
                />


                <Image
                    style={{ width: 67, height: 67 }}
                    source={require('../../assets/javascript.png')}
                />


                <Image
                    style={{ width: 67, height: 67 }}
                    source={require('../../assets/css.png')}
                />

            </ConteudoTech>
        </Container>
    );
}