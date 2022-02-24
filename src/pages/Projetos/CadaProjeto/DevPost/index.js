import React, { useRef, useState } from 'react';
import { View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize'
import WebView from 'react-native-webview';
import BotaoVoltar from '../../../../components/BotaoVoltar';
import Header from '../../../../components/Header';

import {
    Container,
    Texto,
    Botao,
    ConteudoRedes,
} from './styles';


const { height: initialHeight } = Dimensions.get('window');

export default function DevPost({ data }) {

    const modalizeGithub = useRef(null);
    const modalizeRefFacebook = useRef(null);
    const modalizeRefLinkedin = useRef(null);
    const modalizeRefInstagram = useRef(null);

    const [height, setHeight] = useState(initialHeight);

    function abrirGithub() {
        modalizeGithub.current?.open();
    }

    function abrirFacebook() {
        modalizeRefFacebook.current?.open();
    }

    function abrirLinkedin() {
        modalizeRefLinkedin.current?.open();
    }

    function abrirInstagram() {
        modalizeRefInstagram.current?.open();
    }


    const handleLayout = ({ layout }) => {
        setHeight(layout.height);
    };

    return (
        <LinearGradient
            colors={['#39424E', '#516074', '#39424E']}
            style={{
                flex: 1,
                zIndex:0,
            }} >
            <BotaoVoltar />
            <Header/>
            <Container>

                <Botao onPress={() => abrirGithub()}>
                    <Feather name='github' size={30} color='#fff' />
                </Botao>

                <Modalize
                    ref={modalizeGithub}
                    snapPoint={300}
                    handlePosition="inside"
                    modalHeight={600}
                    onLayout={handleLayout}
                >
                    <WebView
                        ref={modalizeGithub}
                        source={{ uri: 'https://github.com/raphaeldemelo' }}
                        style={{ height }}
                    />
                </Modalize>

                <Botao onPress={() => abrirFacebook()}>
                    <Feather name='facebook' size={30} color='#fff' />
                </Botao>

                <Modalize
                    ref={modalizeRefFacebook}
                    snapPoint={300}
                    handlePosition="inside"
                    modalHeight={600}
                >
                    <WebView
                        ref={modalizeRefFacebook}
                        source={{ uri: 'http://www.facebook.com/raphaeldemelos' }}
                        style={{ height }}
                    />
                </Modalize>

                <Botao onPress={() => abrirLinkedin()}>
                    <Feather name='linkedin' size={30} color='#fff' />
                </Botao>

                <Modalize
                    ref={modalizeRefLinkedin}
                    snapPoint={300}
                    handlePosition="inside"
                    modalHeight={600}
                >
                    <WebView
                        ref={modalizeRefLinkedin}
                        source={{ uri: 'https://www.linkedin.com/in/raphaeldemelo/' }}
                        style={{ height }}
                    />
                </Modalize>

                <Botao onPress={() => abrirInstagram()}>
                    <Feather name='instagram' size={30} color='#fff' />
                </Botao>

                <Modalize
                    ref={modalizeRefInstagram}
                    snapPoint={300}
                    handlePosition="inside"
                    modalHeight={600}
                >
                    <WebView
                        ref={modalizeRefInstagram}
                        source={{ uri: 'https://www.instagram.com/raphaeldemelo_/' }}
                        style={{ height }}
                    />
                </Modalize>
            </Container>

        </LinearGradient>
    );
}