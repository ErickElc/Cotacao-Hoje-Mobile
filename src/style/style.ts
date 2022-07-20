import styled from "styled-components/native";
import { StyleSheet } from "react-native";
export const ContainerHeader = styled.View`
    padding: 15px;
    flex-flow: row;
    justify-content: center;
    align-items:center;
    background-color: rgb(32, 31, 31);
`;

export const TextHeader = styled.Text`
    font-size: 36px;
    font-weight: 700;
    color: white;
`
export const Imagem = styled.Image`
    width: 75px;
    height: 75px;
`
export const ContainerMain = styled.View`
    margin-top: 13%;
    height: 60%;
    justify-content:center;
    align-items: center;

`
export const ContainerInputs = styled.View`
    padding: 40px;
    border: 1px solid gray;
    border-radius: 10px;
    justify-content:center;
    align-items: center;
`
export const TextView = styled.Text`
    margin-right: 10px;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`

export const InputsMoedas = styled.TextInput`
    flex-flow: row;
    justify-content: center;
    border-bottom: 1px solid gray;
    width: 80px;
`
export const SelectContainer = styled.View`
    border: 1px solid black;
    width: 90px;
    height: 25px;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    top: -8%;
    left: 70%;
    background:white;

`
export const Background = styled.View`
    height: 120%;
`
export const style = StyleSheet.create({
    input:{
        borderBottomWidth: 1.8,
    },
    borderView:{
        flexDirection: 'column',
        overflow: "hidden",
        borderRadius: 10,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 20,
        padding:50,
        backgroundColor: '#ffffff',
        width: 220,
        alignContent: "center"
    }
})