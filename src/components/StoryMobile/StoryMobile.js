import { Card } from "@mui/material";
import { Styles } from "./Styles";
import Slider from "react-slick";

export function StoryMobile() {
    return (
        <div style={Styles.main}>

            <div style={Styles.whitebox}>

                <h2 style={Styles.title}>De cobrador de van a referência em vendas: a história de Antonio Ignacio</h2>

                <h4 style={Styles.description}>
                    Se você começou agora, ou já está a anos tentando, vou te mostrar exatamente o que
                    eu faço, de forma simples, para faturar alto todos os dias com meus produtos.
                </h4>

            </div>

            <div style={Styles.graybox}>

                <img style={Styles.profile} src="/story-profile.png" />

                <Card sx={Styles.card} variant="outlined">
                    <Slider style={Styles.carousel} settings={{
                        dots: true,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }}>
                        <div style={Styles.carouselDiv}>
                            <h4 style={Styles.carouselText}>
                                Antonio Ignacio começou sua jornada cedo, aos 12 anos, como cobrador de van ao lado do tio. Ganhando R$ 50 por dia, ele ajudava sua
                                mãe financeiramente e ainda realizava seus pequenos sonhos, como comprar peças para seu skate. Sua rotina era intensa: acordava às 2 da
                                manhã para trabalhar até meio-dia, seguia para o colégio e, nas poucas horas livres, encontrava tempo para andar de skate. Dormindo, no
                                máximo, de 5 a 6 horas por dia, Antonio aprendeu desde cedo o valor do esforço, da disciplina e da resiliência.
                            </h4>
                        </div>
                        <div style={Styles.carouselDiv}>
                            <h4 style={Styles.carouselText}>
                                Esse ritmo intenso o acompanhou até os 18 anos, moldando seu caráter e preparando-o para novos desafios. Após deixar a van, Antonio
                                ingressou no mercado corporativo, trabalhando em uma administradora de condomínios. Foi ali que teve seu primeiro contato com o mundo
                                dos negócios. Sempre inquieto e em busca de crescimento, enxergou oportunidades no mercado digital e começou a vender produtos pela
                                internet, percebendo o potencial de expansão exponencial que aquele mercado oferecia.
                            </h4>
                        </div>
                        <div style={Styles.carouselDiv}>
                            <h4 style={Styles.carouselText}>
                                Com sua paixão por vendas em alta, Antonio assumiu o desafio de trabalhar em um escritório de advocacia, focando no fechamento de
                                negociações e contratos de alto valor. Em pouco tempo, destacou-se por sua habilidade de criar conexões e negociar acordos de
                                grande impacto. Gerenciou uma equipe de vendas diretas por um ano, entregando impressionantes R$ 3 milhões em contratos para a
                                empresa.
                            </h4>
                        </div>
                        <div style={Styles.carouselDiv}>
                            <h4 style={Styles.carouselText}>
                                Essa trajetória repleta de aprendizados e desafios culminou na criação de seu maior projeto: o curso APLICA E VENDE. Motivado pelo
                                desejo de se tornar uma referência em vendas e compartilhar sua expertise, Antonio desenvolveu um método prático e eficiente para
                                transformar atendimentos em vendas. Ele acredita que o curso é um divisor de águas para quem deseja sair do zero, assim como ele saiu,
                                e proporcionar uma vida melhor para sua família por meio das vendas.
                            </h4>
                        </div>
                        <div style={Styles.carouselDiv}>
                            <h4 style={Styles.carouselText}>
                                Hoje, Antonio Ignacio é mais do que um vendedor: é um exemplo de determinação, resiliência e visão. Sua história mostra que, com
                                trabalho duro e dedicação, é possível transformar qualquer sonho em realidade.
                            </h4>
                        </div>
                        <div style={Styles.carouselDiv}>
                            <h4 style={Styles.carouselText}>
                                "Eu acredito que o sucesso não é algo que se alcança sozinho. Ele é construído nas escolhas que fazemos, nas oportunidades que
                                abraçamos e, principalmente, na vontade de nunca desistir. E isso é o que desejo para cada pessoa que cruzar meu caminho."
                            </h4>
                        </div>
                    </Slider>
                </Card>

            </div>

        </div>
    )
}