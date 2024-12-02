import { Button } from "@mui/material";
import ReactPlayer from "react-player";
import { Styles } from "./Styles";

export function GraphMobile(){
    return(
        <div style={Styles.main}>
            <div style={Styles.box}>

                <h2 style={Styles.title}>Quero ser para você o que não tive quando comecei no marketing digital</h2>
                <h3 style={Styles.description}>Já investi MILHÕES DE REAIS em cursos, mentorias, networking e testando as minhas campanhas…</h3>

                <h2 style={Styles.title}>Para que seu único investimento, <span style={Styles.markedText}>seja na sua inscrição para o Aplica e Vende.</span></h2>

            </div>
        </div>
    )
}