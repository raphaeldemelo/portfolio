import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { Modal } from 'react-native';
import ModalLink from '../../ModalLink';

import {
    Container,
    Botao,
} from './styles';

export default function Instagram() {

    const [abrirModal, setAbrirModal] = useState(false);
    const [abrirInstagram, setInstagram] = useState('https://www.instagram.com/raphaeldemelo_/');

    return (
        <Container>
            <Botao onPress={() => setAbrirModal(true)}>
                <Feather
                    name='instagram'
                    color='#ddd'
                    size={25}
                />
            </Botao>


            <Modal animationType='slide' transparent={true} visible={abrirModal}>
                <ModalLink
                    link={abrirInstagram}
                    fecharModal={() => setAbrirModal(false)}
                />
            </Modal>

        </Container>
    );
}