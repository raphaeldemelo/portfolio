import styled from 'styled-components/native';

export const Container = styled.View`
flex:0.5;
margin-top: 100px;
align-items:center;
justify-content:center;
margin-bottom: 20px;
`;

export const Nome = styled.Text`
color: #fff;
font-size: 25px;
font-family: Dongle_700Bold;
`;

export const Subtitulo = styled.Text`
color: #ddd;
font-size: 16px;
margin-top: -10px;
font-family: Dongle_300Light;
margin-bottom: 10px;
`;

export const Botao = styled.TouchableOpacity`
position: absolute;
right: 30%;
bottom: 30%;
background-color: rgba(155, 155, 155, 0.7);
width: 45px;
height: 45px;
align-items: center;
justify-content: center;
border-radius: 30px;
`;