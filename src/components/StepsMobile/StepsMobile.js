import { Button } from "@mui/material";
import ReactPlayer from "react-player";
import { Styles } from "./Styles";

export function StepsMobile(){
    return(
        <div style={Styles.main}>
            <h1 style={Styles.title}>Você nunca mais ficará perdido ao aplicar as 5 etapas da Estrutura de Projetos Práticos.</h1>
            <img style={Styles.image} src="/steps-mobile.png"/>
        </div>
    )
}