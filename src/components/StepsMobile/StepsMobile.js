import { Button } from "@mui/material";
import ReactPlayer from "react-player";
import { Styles } from "./Styles";

export function StepsMobile(){
    return(
        <div style={Styles.main}>
            <h2 style={Styles.title}>Você nunca mais se sentirá perdido, quando usar as 5 etapas da Estrutura de Projetos Céticos</h2>
            <img style={Styles.image} src="/steps-mobile.svg"/>
        </div>
    )
}