import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { Modal } from 'react-native';
import ModalLink from '../../ModalLink';

import {
    Container,
    Texto,
    Botao,
} from './styles';

export default function Github() {

    const [abrirModal, setAbrirModal] = useState(false);
    const [abrirGithub, setGithub] = useState('https://github.com/raphaeldemelo');

    return (
        <Container>
            <Botao onPress={() => setAbrirModal(true)}>
                <Feather
                    name='github'
                    color='#ddd'
                    size={25}
                />
            </Botao>


            <Modal animationType='slide' transparent={true} visible={abrirModal}>
                <ModalLink
                    link={abrirGithub}
                    fecharModal={() => setAbrirModal(false)}
                />
            </Modal>

        </Container>
    );
}