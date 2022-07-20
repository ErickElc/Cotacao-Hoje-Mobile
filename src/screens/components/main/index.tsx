import { ContainerMain, ContainerInputs, InputsMoedas, style, TextView, SelectContainer, Background} from "../../../style/style";
import { ImageBackground, View } from "react-native";
import { useEffect, useState } from "react";
import {Picker} from '@react-native-picker/picker';
const url = `https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,AUD-BRL,RUB-BRL,CAD-BRL,GBP-BRL,ARS-BRL`;
const Moedas = ["USD", "EUR", "CAD", "GBP", "RUB", "AUD","ARS"];
const images = [ 
    require("../../../../assets/images/backgrounds/USA.png"),
    require("../../../../assets/images/backgrounds/EURMOB.png"),
    require("../../../../assets/images/backgrounds/CAD.png"),
    require("../../../../assets/images/backgrounds/GBP.png"),
    require("../../../../assets/images/backgrounds/RUB.png"),
    require("../../../../assets/images/backgrounds/AUD.png"),
    require("../../../../assets/images/backgrounds/ARS.png")
];
export function Main(){
    const [cotacao , setCotacao] = useState({
        Cotacao: ""
    })
    const [index, setIndex] = useState({
        i: 0,
        placeholder: Moedas[0],
    })
    const [valor, setValor] = useState({
        Moeda1: '',
        Moeda2: ''
    })
    useEffect(()=>{
        fetch(url).then((res)=> res.json()).then((data)=>{
            const dados = [data.USDBRL.ask,data.EURBRL.ask,
                data.CADBRL.ask,data.GBPBRL.ask,data.RUBBRL.ask,data.AUDBRL.ask,data.ARSBRL.ask];
            setCotacao({Cotacao:dados[index.i]});
        })
    },[url, index]);
    return(
        <Background>
            <ImageBackground source={images[index.i]} resizeMode='cover'>
                <ContainerMain>
                    <SelectContainer>
                        <Picker
                            style={{width: 100, position: "relative", top: -16}}
                            onValueChange={ 
                                (itemIndex) => {
                                    setIndex({
                                        i: itemIndex,
                                        placeholder: `${Moedas[itemIndex]}`,
                                    })
                                    setValor({Moeda1: '', Moeda2: ''})
                                    }
                                }
                                placeholder={Moedas[index.i]}
                                selectedValue={index.i}
                                >
                            {Moedas.map((item:any, index:any)=>{
                                return(<Picker.Item key={item}label={Moedas[index]} value={index} />)
                            })}
                        </Picker>
                    </SelectContainer>
                    <ContainerInputs style={style.borderView}>
                        <View style={{flexDirection: "row", alignItems: "flex-end"}}>
                            <TextView>BRL:</TextView>
                            <InputsMoedas 
                                style={style.input}
                                value={valor.Moeda1} 
                                keyboardType="number-pad"
                                placeholder="BRL"
                                onChangeText={
                                    (e:any) => setValor({
                                        Moeda1: `${(e == 0)? '': e}`,
                                        Moeda2: `${(e == 0)? '': (e / parseFloat(cotacao.Cotacao)).toFixed(2)}`
                                    })
                                }
                            />
                        </View>
                        <View style={{flexDirection: "row", alignItems: "flex-end"}}>
                            <TextView>{index.placeholder}:</TextView>
                            <InputsMoedas
                                style={style.input}
                                value={valor.Moeda2} 
                                keyboardType="number-pad"
                                placeholder={index.placeholder}
                                onChangeText={
                                    (e:any) => setValor({
                                        Moeda1: `${(e == 0)? '': (e * parseFloat(cotacao.Cotacao)).toFixed(2)}`,
                                        Moeda2: `${(e == 0)? '': e}`
                                    })
                                }
                            />
                        </View>
                    </ContainerInputs>
                </ContainerMain>
            </ImageBackground>
        </Background>
    )
}