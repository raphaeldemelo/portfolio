import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
height: 80%;
padding: 50px;
background-color: rgba(0,0,0, 0.3);
`;


export const BotaoTexto = styled.Text`
color: #fff;
font-weight: bold;
`;


export const Botao = styled.TouchableOpacity`
height: 50px;
background-color: #E72F49;
align-items: center;
justify-content: center;
padding: 10px;
border-radius: 10px;
align-self: center;
elevation: 5;
`;

export const Detalhes = styled.View`
flex: 1;
height: 300px;
background-color: #464646;
border-top-right-radius: 10px;
border-top-left-radius: 10px;
padding: 20px;
`;

export const Titulo = styled.Text`
color: #fff;
font-weight: bold;
font-size: 20px;
`;

export const Funcionalidade = styled.View`
margin-top: 10px;
color: #fff;
font-weight: bold;
font-size: 20px;
flex-direction: column;
flex: 1;
margin-bottom: 50px;
`;

export const Tecnologia = styled.View`
margin-top: -50px;
color: #fff;
font-weight: bold;
font-size: 20px;
flex-direction: column;
flex: 1;
`;

export const Descricao = styled.Text`
color: #fff;
font-size: 12px;
`;

export const AreaBotao = styled.View`
background-color: #000;
flex: 1;
align-items: center;
justify-content: center;
border-top-width: 1px;
border-color: #464646;
shadow-opacity: 0.8;
`;

