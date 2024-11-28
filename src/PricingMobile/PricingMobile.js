import { Button, Card } from "@mui/material";
import { Styles } from "./Styles";

export function PricingMobile() {
    return (
        <div style={Styles.main}>


            <div style={Styles.topBox}>
                <div>

                    <h1 style={Styles.title}>Está pronto para transformar sua vida de verdade?</h1>
                    <h3 style={Styles.description}>
                        Chegou a hora de você dominar as vendas e viver DE UMA VEZ POR TODAS do que ama, mesmo que hoje você se ache um INICIANTE sem chances no mercado!
                    </h3>

                </div>

                <Card sx={Styles.card}>

                    <h4 style={Styles.cardDescription}>TUDO ISSO E MUITO MAIS POR APENAS</h4>
                    <h1 style={Styles.cardTitle}><span style={{ fontSize: "3vw" }}>12x</span> R$33,08</h1>
                    <h4 style={Styles.cardDescription}>ou R$397,00 à vista</h4>
                    <h5 style={Styles.cardSubdescription}>Passarinho que chega cedo bebe água limpa, clica no botão e garanta sua vaga!</h5>
                    <Button variant="contained" style={Styles.button}><h4>QUERO GARANTIR MINHA VAGA NO APLICA E VENDE</h4></Button>

                </Card>

                <div>

                    <h3 style={Styles.description}>
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
                    </h3>

                </div>
            </div>


            <div style={Styles.bottomBox}>

                <img style={Styles.image} src="/guarantee-animated.svg" />
                <br />
                <img style={Styles.image} src="/guarantee.svg" />

                <h4 style={Styles.markedText}><strong>NÃO SE PREOCUPE, VOCÊ ESTÁ TOTALMENTE SEGURO.</strong></h4>
                <h2 style={Styles.title}><strong>NA VERDADE, VOCÊ ESTÁ SUPER SEGURO.</strong></h2>
                <h4 style={Styles.description}>

                    Eu, Antonio Ignacio, não tenho dúvidas do poder transformador do meu método APLICA E VENDE. Eu coloco a minha mão no fogo por ele.
                    <br />
                    <br />
                    E, sinceramente, cansei de ver por aí aquelas garantias básicas que todo mundo oferece.
                    <br />
                    <br />
                    Garantia de 7 dias? Isso é o mínimo.
                    <br />
                    <br />
                    Meu compromisso com você vai muito além disso. Eu acredito tanto no que ensino que quero te fazer uma proposta que é impossível de recusar:
                    <br />
                    <br />
                    Se você entrar no APLICA E VENDE, aplicar tudo o que ensino, e em 4 meses não tiver nenhum resultado real, eu devolvo todo o seu dinheiro e ainda o dobro do valor investido.
                    <br />
                    <br />
                    E não é só promessa: esse compromisso será formalizado, reconhecido em cartório, para garantir a eficácia do meu método e a sua segurança.
                    <br />
                    <br />
                    Eu estou colocando meu nome, minha reputação e meu método à prova. Porque eu sei que, se você aplicar, vai ter resultados que podem transformar sua vida!
                    <br />
                    <br />
                    Chegou a hora de dar esse passo. Vamos juntos?

                </h4>

            </div>

        </div>
    )
}