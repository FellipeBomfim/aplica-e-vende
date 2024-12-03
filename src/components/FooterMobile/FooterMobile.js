import { Button } from "@mui/material";
import { Styles } from "./Styles";

export function FooterMobile() {
    return (
        <div style={Styles.main}>
            <div style={Styles.box}>

                <h5 style={Styles.title}>Se inscreva no curso "APLICA E VENDE" e seja um campeão de vendas</h5>

                <div style={Styles.boxDescription}>
                    <Button variant="contained" style={Styles.button}><h3>COMEÇAR AGORA</h3></Button>
                </div>
            </div>

            <img style={Styles.logo} src="/logo.png"/>

            <div style={Styles.row}>
                <div style={Styles.textBox}>
                    <h5 style={Styles.subtitle}>Quando o assunto é vendas, o Antonio Ignacio domina.</h5>
                    <h6 style={Styles.description}></h6>
                </div>

                <div style={Styles.textBox}>
                    <h5 style={Styles.subtitle}>APLICA E VENDE</h5>
                    <h6 style={Styles.description}>
                        CNPJ: 57.055.446/0001-30
                        <br/>
                        <br/>
                        Contato: contato@toapply.com.br
                        <br/>
                        <br/>
                        APLICA E VENDE © 2024
                    </h6>
                </div>

                <div style={Styles.textBox}>
                    <h5 style={Styles.subtitle}>Fale Conosco</h5>
                    <h6 style={Styles.description}>
                        contato@toapply.com.br
                        <br/>
                        <br/>
                    </h6>
                    <a style={Styles.instagramSection} href="https://www.instagram.com/antonioignacioj">
                        <img style={Styles.instagramLogo} src="/instagram.png"/>
                        <h6 style={Styles.instagramText}>antonioignacioj</h6>
                        
                    </a>
                </div>
            </div>

            <div style={Styles.line}></div>
            <h6>© 2024 APLICA E VENDE - Todos os Direitos Reservados</h6>
        </div>
    )
}