import { Button } from "@mui/material";
import ReactPlayer from "react-player";
import { Styles } from "./Styles";

export function Headline(){
    return(
        <div style={Styles.main}>
            <h2 style={Styles.title}>
                O passo a passo validado por mais de <strong style={Styles.markedText}>50 mil alunos </strong> 
                com tudo o que você precisa para dar certo no digital e faturar 5, 6 e até mesmo 7 dígitos todos os meses!
            </h2>

            <h4 style={Styles.description}>Mesmo que você seja um completo iniciante...</h4>

            <ReactPlayer 
                width="50vw" 
                height="27.5vw"
                playing={true}
                muted={true} 
                url="https://www.youtube.com/watch?v=NpEaa2P7qZI"
            />

            <Button variant="contained" style={Styles.button}><h2>QUERO ME TORNAR UM ESPECIALISTA EM VENDAS ONLINE</h2></Button>
        </div>
    )
}