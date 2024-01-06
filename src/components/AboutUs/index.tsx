import { ButtonPrimary } from "../ButtonPrimary";
import { AboutUsBox, AboutUsCard, AboutUsContainer } from "./styles";

export function AboutUs(){
    return(
        <AboutUsContainer>
            <AboutUsCard>
                <p>50+ Receitas de Comida Rápida 
                Fácil de fazer!</p>
            </AboutUsCard>
            <AboutUsBox>
                <h2>Quem somos</h2>
                <p>As nossas receitas são o coração e a alma da nossa comunidade culinária e refletem o nosso compromisso em proporcionar-lhe experiências gastronómicas memoráveis e deliciosas.</p>
                <ButtonPrimary text="Saiba mais" onClick={() => {}}/>
            </AboutUsBox>
        </AboutUsContainer>
    )
}
