import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import {
    Texto,
} from './styles';

export default function QrcodeCea() {
    return (
        <LinearGradient
            colors={['#39424E', '#516074', '#39424E']}
            style={{
                flex: 1,
            }} >

            <Texto>raphael, essa será a QrcodeCea</Texto>

        </LinearGradient>
    );
}