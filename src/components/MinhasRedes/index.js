import React, { useState } from 'react';

import {
    Container,
    Nome,
    ConteudoRedes,
} from './styles';

import {
    Dongle_300Light,
    Dongle_400Regular,
    Dongle_700Bold,
} from '@expo-google-fonts/dongle'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import Instagram from './Instagram';
import Github from './Github';
import Linkedin from './Linkedin';
import Facebook from './Facebook';


export default function MinhasRedes() {


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
            <Nome style={{ marginLeft: 10 }}>Minhas Redes</Nome>
            <ConteudoRedes >

                <Instagram />
                <Github />
                <Linkedin />
                <Facebook />

            </ConteudoRedes>
        </Container >
    );
}