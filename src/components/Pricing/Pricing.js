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

                    <h2 style={Styles.title}>Está pronto para transformar sua vida de verdade?</h2>
                    <h5 style={Styles.description}>
                    Chegou a hora de você dominar as vendas e viver DE UMA VEZ POR TODAS do que ama, mesmo que hoje você se ache um INICIANTE sem chances no mercado!
                    </h5>

                </div>

                <Card sx={Styles.card}>

                    <h5 style={Styles.cardDescription}>TUDO ISSO E MUITO MAIS POR APENAS</h5>
                    <h1 style={Styles.cardTitle}><span style={{fontSize: "1.5vw"}}>12x</span> R$33,08</h1>
                    <h5 style={Styles.cardDescription}>ou R$397,00 à vista</h5>
                    <h6 style={{marginTop: "4vw"}}>Passarinho que chega cedo bebe água limpa, clica no botão e garanta sua vaga!</h6>
                    <Button href="https://pay.kirvano.com/d1be7de5-310e-4998-a00e-f27b74fec6ef" variant="contained" style={Styles.button}><h2>QUERO GARANTIR MINHA VAGA NO APLICA E VENDE</h2></Button>

                </Card>

                <div style={{
                    width: "30vw",
                    boxSizing: "border-box",
                    paddingRight: "15vw"
                }}>

                    <h5 style={Styles.description}>
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

                <img style={Styles.image} src="/guarantee-animated.svg"/>
                <br/>
                <img style={Styles.image} src="/guarantee.svg"/>

                <h5 style={Styles.markedText}><strong>NÃO SE PREOCUPE, VOCÊ ESTÁ TOTALMENTE SEGURO.</strong></h5>
                <h3 style={Styles.title}><strong>NA VERDADE, VOCÊ ESTÁ SUPER SEGURO.</strong></h3>
                <h5 style={Styles.description}>

                    Eu, Antonio Ignacio, não tenho dúvidas do poder transformador do meu método APLICA E VENDE. Eu coloco a minha mão no fogo por ele.
                    <br/>
                    <br/>
                    E, sinceramente, cansei de ver por aí aquelas garantias básicas que todo mundo oferece.
                    <br/>
                    <br/>
                    Garantia de 7 dias? Isso é o mínimo.
                    <br/>
                    <br/>
                    Meu compromisso com você vai muito além disso. Eu acredito tanto no que ensino que quero te fazer uma proposta que é impossível de recusar:
                    <br/>
                    <br/>
                    Se você entrar no APLICA E VENDE, aplicar tudo o que ensino, e em 4 meses não tiver nenhum resultado real, eu devolvo todo o seu dinheiro e ainda o dobro do valor investido.
                    <br/>
                    <br/>
                    E não é só promessa: esse compromisso será formalizado, reconhecido em cartório, para garantir a eficácia do meu método e a sua segurança.
                    <br/>
                    <br/>
                    Eu estou colocando meu nome, minha reputação e meu método à prova. Porque eu sei que, se você aplicar, vai ter resultados que podem transformar sua vida!
                    <br/>
                    <br/>
                    Chegou a hora de dar esse passo. Vamos juntos?

                </h5>

            </div>

        </div>
    )
}