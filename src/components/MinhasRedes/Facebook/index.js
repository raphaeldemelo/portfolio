import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { Modal } from 'react-native';
import ModalLink from '../../ModalLink';

import {
    Container,
    Botao,
} from './styles';

export default function Facebook() {

    const [abrirModal, setAbrirModal] = useState(false);
    const [abrirFacebook, setFacebook] = useState('http://www.facebook.com/raphaeldemelos');

    return (
        <Container>
            <Botao onPress={() => setAbrirModal(true)}>
                <Feather
                    name='facebook'
                    color='#ddd'
                    size={25}
                />
            </Botao>


            <Modal animationType='slide' transparent={true} visible={abrirModal}>
                <ModalLink
                    link={abrirFacebook}
                    fecharModal={() => setAbrirModal(false)}
                />
            </Modal>

        </Container>
    );
}