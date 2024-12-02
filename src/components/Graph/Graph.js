import { Button } from "@mui/material";
import ReactPlayer from "react-player";
import { Styles } from "./Styles";

export function Graph(){
    return(
        <div style={Styles.main}>
            <div style={Styles.box}>

                <h2 style={Styles.titleLeft}>Quero ser para você o que não tive quando comecei no marketing digital</h2>
                <h4 style={Styles.descriptionLeft}>Já investi MILHÕES DE REAIS em cursos, mentorias, networking e testando as minhas campanhas…</h4>

                <h2 style={Styles.titleRight}>Para que seu único investimento,</h2>
                <h4 style={Styles.descriptionRight}>seja na sua inscrição para o Aplica e Vende.</h4>

            </div>
        </div>
    )
}