import React from 'react';

import { WebView } from 'react-native-webview';
import {
    Container,
    BotaoVoltar,
    Texto,
} from './styles';

export default function ModalLink({ link, fecharModal }) {


    return (
        <Container>
            <BotaoVoltar onPress={fecharModal} style={{ opacity: 0.5 }}>
            </BotaoVoltar>

            <WebView
                source={{ uri: link }}
            />
        </Container>
    );
}