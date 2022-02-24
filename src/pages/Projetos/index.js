import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Menu from '../../components/Menu';
import {
    Container,
    Titulo,
    Lista,
} from './styles';
import Cards from '../../components/Cards';
import { useNavigation } from '@react-navigation/native';

const minhaLista = [
    {
        'id': 1,
        'projeto': 'DevPost',
        'tecnologia': 'React Native'
    },
    {
        'id': 2,
        'projeto': 'AppFinanças',
        'tecnologia': 'React Native'
    },
    {
        'id': 3,
        'projeto': 'ReactPrime',
        'tecnologia': 'React Native'
    },
    {
        'id': 4,
        'projeto': 'Conversor de Moedas',
        'tecnologia': 'React Native'
    },
    {
        'id': 5,
        'projeto': 'Buscador de CEP',
        'tecnologia': 'React Native'
    },
    {
        'id': 6,
        'projeto': 'ClimatempoReact',
        'tecnologia': 'React Native'
    },
    {
        'id': 7,
        'projeto': 'Gerador de senha',
        'tecnologia': 'React Native'
    },
    {
        'id': 8,
        'projeto': 'QR Code - App C&A',
        'tecnologia': 'React JS'
    },

];

export default function Projetos() {

    const navigation = useNavigation();

    function navigatePaginaDetalhes(item) {

        if (item.id === 1) {
            navigation.navigate('DevPost')
        }

        if (item.id === 2) {
            navigation.navigate('AppFinanças')
        }

        if (item.id === 3) {
            navigation.navigate('ReactPrime')
        }

        if (item.id === 4) {
            navigation.navigate('ConversorMoedas')
        }

        if (item.id === 5) {
            navigation.navigate('BuscadordeCep')
        }

        if (item.id === 6) {
            navigation.navigate('Climatempo')
        }

        if (item.id === 7) {
            navigation.navigate('GeradorSenha')
        }

        if (item.id === 8) {
            navigation.navigate('QrCode')
        }
    }

    return (
        <LinearGradient
            colors={['#39424E', '#516074', '#39424E']}
            style={{
                flex: 1,
            }} >
            <Menu />

            <Container>
                <Titulo>Meus Projetos</Titulo>

                <Lista
                    showsVerticalScrollIndicator={false}
                    data={minhaLista}
                    keyExtractor={item => String(item.projeto)}
                    renderItem={({ item }) => (<Cards data={item} navigatePagina={() => navigatePaginaDetalhes(item)} />)}
                />

            </Container>

        </LinearGradient>
    );
}