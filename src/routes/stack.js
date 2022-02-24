import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Projetos from '../pages/Projetos';
import DevPost from '../pages/Projetos/CadaProjeto/DevPost';
import AppFinanças from '../pages/Projetos/CadaProjeto/AppFinancas';
import ReactPrime from '../pages/Projetos/CadaProjeto/ReactPrime';
import ConversorMoedas from '../pages/Projetos/CadaProjeto/ConversorMoedas';
import BuscadordeCep from '../pages/Projetos/CadaProjeto/BuscadordeCep';
import Climatempo from '../pages/Projetos/CadaProjeto/Climatempo';
import GeradorSenha from '../pages/Projetos/CadaProjeto/GeradorSenha';
import QrCodeCea from '../pages/Projetos/CadaProjeto/QrCodeCea';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Projetos'
                component={Projetos}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='DevPost'
                component={DevPost}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='AppFinanças'
                component={AppFinanças}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='ReactPrime'
                component={ReactPrime}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='ConversorMoedas'
                component={ConversorMoedas}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='BuscadordeCep'
                component={BuscadordeCep}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='Climatempo'
                component={Climatempo}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='GeradorSenha'
                component={GeradorSenha}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='QrCode'
                component={QrCodeCea}
            />


        </Stack.Navigator>
    )
}