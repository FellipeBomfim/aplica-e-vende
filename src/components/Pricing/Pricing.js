import { Button, Card } from "@mui/material";
import { Styles } from "./Styles";

export function Pricing() {
    return (
        <div style={Styles.main}>

            <div style={Styles.smallBox}>

                <div style={{
                    width: "30vw",
                    boxSizing: "border-box",
                    paddingLeft: "15vw"
                }}>

                    <h2 style={Styles.title}>Você está pronto para reescrever sua história?</h2>
                    <h5 style={Styles.description}>
                        Chegou a hora de você viver DE UMA VEZ POR TODAS da internet, mesmo que você se considere um “ILUDIDO” no Mercado Digital.
                    </h5>

                </div>

                <Card sx={Styles.card}>

                    <h5 style={Styles.cardDescription}>TUDO ISSO E MUITO MAIS POR APENAS</h5>
                    <h1 style={Styles.cardTitle}><span style={{fontSize: "1.5vw"}}>12x</span> R$200,50</h1>
                    <h5 style={Styles.cardDescription}>ou R$1.997,00 à vista</h5>
                    <h6 style={{marginTop: "4vw"}}>Quem chega primeiro bebe água limpa, clica no botão e garanta sua vaga!</h6>
                    <Button variant="contained" style={Styles.button}><h2>QUERO GARANTIR MINHA VAGA NO EVO</h2></Button>

                </Card>

                <div style={{
                    width: "30vw",
                    boxSizing: "border-box",
                    paddingRight: "15vw"
                }}>

                    <h5 style={Styles.description}>
                        • Sistema Akinatra
                        <br />
                        <br />
                        • Suporte Premium, Exclusivo e Ilimitado
                        <br />
                        <br />
                        • Área de membros VIP 100% online e EXCLUSIVA para alunos
                        <br />
                        <br />
                        • 100% dos vídeos passo a passo (Mostro tudo!)
                        <br />
                        <br />
                        • Conteúdo 100% atualizado (Aulas novas)
                        <br />
                        <br />
                        • Mais de 9 módulos
                        <br />
                        <br />
                        • Encontro semanal tira dúvida PESSOALMENTE COMIGO
                    </h5>

                </div>

            </div>

            <div style={Styles.largeBox}>

                <img src="/guarantee-animated.svg"/>
                <br/>
                <img src="/guarantee.svg"/>

                <h5 style={Styles.markedText}><strong>NÃO SE PREOCUPE, VOCÊ ESTÁ TOTALMENTE SEGURO.</strong></h5>
                <h3 style={Styles.title}><strong>NA VERDADE, VOCÊ ESTÁ SUPER SEGURO.</strong></h3>
                <h5 style={Styles.description}>

                    Eu não tenho dúvidas do poder de resultado do meu método. Eu coloco a minha mão no fogo por ele.
                    <br/>
                    <br/>
                    Por isso, me cansei de fazer aquela garantia comum que todo mundo faz.
                    <br/>
                    <br/>
                    Oferecer 7 dias de garantia é OBRIGAÇÃO.
                    <br/>
                    <br/>
                    E eu quero te mostrar que o meu compromisso com você vai muito além disso.
                    <br/>
                    <br/>
                    Então quero te apresentar uma proposta irrecusável:
                    <br/>
                    <br/>
                    Se você entrar no E.V.O HEADTIME, aplicar o conteúdo, e depois de 4 meses não tiver nenhum resultado, eu devolvo todo o teu dinheiro e mais o dobro do valor.
                    <br/>
                    <br/>
                    Um compromisso reconhecido em cartório para assegurar a eficácia da minha metodologia.

                </h5>

            </div>

        </div>
    )
}