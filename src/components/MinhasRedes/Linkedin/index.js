import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { Modal } from 'react-native';
import ModalLink from '../../ModalLink';

import {
    Container,
    Botao,
} from './styles';

export default function Linkedin() {

    const [abrirModal, setAbrirModal] = useState(false);
    const [abrirLinkedin, setLinkedin] = useState('https://www.linkedin.com/in/raphaeldemelo/');

    return (
        <Container>
            <Botao onPress={() => setAbrirModal(true)}>
                <Feather
                    name='linkedin'
                    color='#ddd'
                    size={25}
                />
            </Botao>


            <Modal animationType='slide' transparent={true} visible={abrirModal}>
                <ModalLink
                    link={abrirLinkedin}
                    fecharModal={() => setAbrirModal(false)}
                />
            </Modal>

        </Container>
    );
}