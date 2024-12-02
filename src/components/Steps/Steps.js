import { Button } from "@mui/material";
import ReactPlayer from "react-player";
import { Styles } from "./Styles";

export function Steps(){
    return(
        <div style={Styles.main}>
            <h2 style={Styles.title}>Você nunca mais ficará perdido ao aplicar as 5 etapas da Estrutura de Projetos Práticos.</h2>
            <img style={Styles.image} src="/steps.png"/>
        </div>
    )
}