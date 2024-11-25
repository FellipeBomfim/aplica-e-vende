import { Styles } from "./Styles";

export function Story() {
    return (
        <div style={Styles.main}>

            <div style={Styles.whitebox}>

                <h2 style={Styles.title}>Minha Jornada foi difícil, para eu fazer A SUA SER FÁCIL.</h2>

                <h4 style={Styles.description}>
                    Se você começou agora, ou já está a anos tentando, vou te mostrar exatamente o que
                    eu faço, de forma simples, para faturar alto todos os dias com meus produtos.
                </h4>

            </div>

            <div style={Styles.graybox}>

                <h4 style={Styles.bubbles}>
                Quando eu comecei, não tinha nada sobre como vender na Internet, é aquela história:
                <br/>
                <br/>
                <strong style={Styles.markedText}>“Quando cheguei aqui, só tinha mato…”</strong>
                </h4>

                <img style={Styles.profile} src="/profile.png" />

                <h4 style={Styles.bubbles}>
                    E entendi que o <strong>COPYWRITING, TRÁFEGO e ANÁLISE </strong> são o que diferencia quem tem resultados de quem não tem!
                    <br/>
                    <br/>
                    Testei e errei muito até chegar nos <strong style={Styles.markedText}>Três Alicerces da Estrutura Cética </strong> e ter ganhos consistentes, por isso….
                </h4>

            </div>


        </div>
    )
}