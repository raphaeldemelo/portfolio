import React, { useRef } from 'react';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Modalize } from 'react-native-modalize'
import BotaoVoltar from '../../../../components/BotaoVoltar';
import Swiper from 'react-native-swiper'
import {
    BotaoTexto,
    Detalhes,
    Container,
    Botao,
    Titulo,
    Funcionalidade,
    Tecnologia,
    Descricao,
    AreaBotao,
} from './styles';



export default function Climatempo() {

    const modalizeRef = useRef(null);


    function abrirModalize() {
        modalizeRef.current?.open();
    }

    return (
        <LinearGradient
            colors={['#000', '#464646', '#000']}
            style={{
                flex: 1,
            }} >
            <Container>
                <BotaoVoltar />
                <Swiper autoplay>
                    <Image
                        resizeMode="contain"
                        style={{ flex: 1, width: '100%' }}
                        source={require('../../../../assets/foto-climatempo.jpg')}
                    />
                    <Image
                        resizeMode="contain"
                        style={{ flex: 1, width: '100%' }}
                        source={require('../../../../assets/gif-climatempo.gif')}
                    />

                </Swiper>
            </Container>
            <AreaBotao>
                <Botao onPress={() => abrirModalize()}>
                    <BotaoTexto>Ver detalhes</BotaoTexto>
                </Botao>
            </AreaBotao>

            <Modalize
                ref={modalizeRef}
                snapPoint={300}
                handlePosition="inside"
                modalHeight={300}
            >
                <Detalhes>
                    <Titulo>Climatempo</Titulo>

                    <Funcionalidade>
                        <Titulo style={{ fontSize: 13 }}>
                            Funcionalidades
                        </Titulo>
                        <Descricao>
                            • Acesso com login e senha em sua conta
                        </Descricao>
                        <Descricao>
                            • Criar uma publicação com receita e despesas
                        </Descricao>
                        <Descricao>
                            • Excluir receitas e despesas
                        </Descricao>
                    </Funcionalidade>

                    <Tecnologia>
                        <Titulo style={{ fontSize: 13 }}>
                            Tecnologias utilizadas
                        </Titulo>
                        <Descricao>
                            • Expo
                        </Descricao>
                        <Descricao>
                            • Styled-components
                        </Descricao>
                        <Descricao>
                            • Lottie
                        </Descricao>
                        <Descricao>
                            • Firebase
                        </Descricao>
                    </Tecnologia>

                    <Botao>
                        <BotaoTexto>Veja o código</BotaoTexto>
                    </Botao>
                </Detalhes>
            </Modalize>



        </LinearGradient >
    );
}