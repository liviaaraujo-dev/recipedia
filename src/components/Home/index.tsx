import { Container1, Container2, HomeContainer } from "./styles";
import homeImg from '../../assets/images/home.png';
import { ButtonPrimary } from "../ButtonPrimary";

export function Home(){
    return (
        <HomeContainer id="home">
            <Container1>
                <h2>Cozinhar Feito Divertido e Fácil: Liberte o Seu Chef Interior</h2>
                <p>Descubra mais de 10.000 receitas na sua mão com a melhor receita. Ajudá-lo a encontrar a maneira mais fácil de cozinhar.</p>
                    <ButtonPrimary text="Explore Receitas" onClick={()=>{}}/>
            </Container1>

            <Container2>
                <img src={homeImg} alt="" />
            </Container2>
        </HomeContainer>
    )
}
