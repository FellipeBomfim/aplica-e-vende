import { Button } from "@mui/material";
import ReactPlayer from "react-player";
import { Styles } from "./Styles";

export function Headline(){
    return(
        <div style={Styles.main}>
            <h2 style={Styles.title}>
            VOCÊ ESTÁ CANSADO DE LUTAR SEM RESULTADOS? DESCUBRA COMO APENAS UM MÉTODO PODE TE TRANSFORMAR EM UM CAMPEÃO 
            DE VENDAS E MUDAR SUA VIDA PARA SEMPRE!
            </h2>

            <h4 style={Styles.description}>Mesmo que você seja um completo iniciante...</h4>

            <ReactPlayer 
                width="50vw" 
                height="27.5vw"
                playing={true}
                url="/intro-video.mp4"
            />

            <Button href="https://pay.kirvano.com/d1be7de5-310e-4998-a00e-f27b74fec6ef" variant="contained" style={Styles.button}><h2>QUERO ME TORNAR UM MESTRE EM VENDAS ATRAVÉS DO "APLICA E VENDE"</h2></Button>
        </div>
    )
}