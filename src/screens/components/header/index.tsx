import { StatusBar } from "expo-status-bar";
import { Image} from "react-native";
import { ContainerHeader, TextHeader} from "../../../style/style";

export function Header(){
    return(
        <ContainerHeader>
            <StatusBar style="light"/>
            <TextHeader>Cotação Hoje</TextHeader>
            <Image source={require("../../../../assets/images/logos/Logoo.png")} 
            resizeMode="contain"
            style={{height: 100, width: 90}}
            />
        </ContainerHeader>
    )
}