import { Styles } from "./Styles";
import data from "./data.json";

function renderBoxes(json) {
    let cont = 0;
    return (
        json.map((item) => {
            cont++;
            if (cont % 2 == 0) {
                return (
                    <div style={Styles.indigoBox}>
                        <img style={Styles.icon} src={item.image} />
                        <h3 style={Styles.subtitle}>{item.subtitle}</h3>
                        <h4 style={Styles.description}>{item.description}</h4>
                    </div>
                )
            } else {
                return (
                    <div style={Styles.blueBox}>
                        <img style={Styles.icon} src={item.image} />
                        <h3 style={Styles.subtitle}>{item.subtitle}</h3>
                        <h4 style={Styles.description}>{item.description}</h4>
                    </div>
                )
            }
        })
    )
}

export function AdvantagesMobile() {
    return (
        <div style={Styles.main}>

            <div style={Styles.roundBox}>
                <div style={Styles.box}>
                    <h3 style={Styles.title}>Com o curso APLICA E VENDE, você vai conseguir construir o maior salário que você já imaginou ter</h3>
                    <img style={Styles.image} src="/profile.png" />
                </div>
                {renderBoxes(data)}
            </div>

        </div>
    )
}