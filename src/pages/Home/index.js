import React from 'react';
import Tecnologias from '../../components/Tecnologias';
import MinhasRedes from '../../components/MinhasRedes';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

import {
    Dongle_300Light,
    Dongle_400Regular,
    Dongle_700Bold,
} from '@expo-google-fonts/dongle'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { LinearGradient } from 'expo-linear-gradient';
import {
    Descricao,
    Nome,
    Texto,
} from './styles';

export default function Home() {

    let [fontsLoaded, error] = useFonts({
        Dongle_300Light,
        Dongle_400Regular,
        Dongle_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (

        <LinearGradient
            colors={['#39424E', '#516074', '#39424E']}
            style={{
                flex: 1,
            }} >

            <Menu />
            <Header />

            <Descricao>
                <Nome style={{ marginLeft: 10 }}>Quem sou eu</Nome>
                <Texto style={{ padding: 10 }}>
                    Sou formado em sistemas de informação, minha área é o lado
                    do front-end. Adoro desenvolver para mobile e atualmente
                    estou praticando react native para entrar nesse mercado de programação.
                </Texto>
            </Descricao>

            <Tecnologias />

            <MinhasRedes />


        </LinearGradient>
    );
}