import { Styles } from "./Styles";
import data from "./data.json";

function renderBoxes(json){
    let cont = 0;
    return (
        json.map((item) => {
            cont ++;
            if(cont % 2 == 0) {
                return (
                    <div style={Styles.indigoBox}>
                        <img src={item.image}/>
                        <h4 style={Styles.subtitle}>{item.subtitle}</h4>
                        <h5 style={Styles.description}>{item.description}</h5>
                    </div>
                )
            }else {
                return (
                    <div style={Styles.blueBox}>
                        <img src={item.image}/>
                        <h4 style={Styles.subtitle}>{item.subtitle}</h4>
                        <h5 style={Styles.description}>{item.description}</h5>
                    </div>
                )
            }
        })
    )
}

export function Advantages() {
    return (
        <div style={Styles.main}>

            <div style={Styles.box}>
                <h3 style={Styles.title}>Com o EVO, você consegue construir um negócio online de 6 DÍGITOS TODOS OS MESES, mesmo:</h3>
                <img style={Styles.image} src="/advantages.png"/>
            </div>

            {renderBoxes(data)}

        </div>
    )
}