import { Card } from "@mui/material";
import { Styles } from "./Styles";
import data from "./data.json";

function renderCards(json){
    return (
        json.map((item) => {
            return(
                <Card sx={Styles.card} variant="outlined">
                    <div style={Styles.cardNumber}>
                        <h2 style={Styles.number}>{item.number}</h2>
                    </div>

                    <h2 style={Styles.cardTitle}>{item.subtitle}</h2>
                    <h3 style={Styles.cardDescription}>{item.description}</h3>
                </Card>
            )
        })
    )
}

export function CardsMobile() {
    return (
        <div style={Styles.main}>

            <h2 style={Styles.title}>CHEGA DE SEGUIR SCRIPTS OU FÓRMULAS E CONSTRUA PRODUTOS VALIDADOS QUE SÃO DO SEU JEITO</h2>
            <h3 style={Styles.description}>Veja agora os <strong style={Styles.markedText}>6 Princípios da Metodologia EVO </strong> 
            que me tiram da cama e me fazem trabalhar para ajudar você a alcançar seus objetivos.</h3>

            <div style={Styles.cardRow}>

                {renderCards(data)}

            </div>
        </div>
    )
}