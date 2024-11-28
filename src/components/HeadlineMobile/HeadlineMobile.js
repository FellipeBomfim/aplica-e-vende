import { Button } from "@mui/material";
import ReactPlayer from "react-player";
import { Styles } from "./Styles";

export function HeadlineMobile(){
    return(
        <div style={Styles.main}>
            <h2 style={Styles.title}>
            VOCÊ ESTÁ CANSADO DE LUTAR SEM RESULTADOS? DESCUBRA COMO APENAS UM MÉTODO PODE TE TRANSFORMAR EM UM CAMPEÃO 
            DE VENDAS E MUDAR SUA VIDA PARA SEMPRE!
            </h2>

            <h4 style={Styles.description}>Mesmo que você seja um completo iniciante...</h4>

            <ReactPlayer 
                width="65vw" 
                height="37.5vw"
                playing={true}
                muted={true} 
                url="https://www.youtube.com/watch?v=NpEaa2P7qZI"
            />

            <Button variant="contained" style={Styles.button}><h2 style={{width: "55vw"}}>QUERO ME TORNAR UM ESPECIALISTA EM VENDAS ONLINE</h2></Button>
        </div>
    )
}