import { FooterContainer, LinksContactsContainer, LogoContainer, TextContainer } from "./styles";
import logo from "../../assets/images/logo.png";
import { FaTwitter, FaLinkedin, FaInstagram , FaYoutube} from "react-icons/fa";




export function Footer() {
    return (
        <FooterContainer>
            <LogoContainer>
                <a href="#">
                    <img src={logo} alt="Recipedia Logo" />
                    Recipedia
                </a>
            </LogoContainer>

            <TextContainer>
                <p>@ 2023 Todos os Direitos reservados.</p>
            </TextContainer>

            <LinksContactsContainer>
                <a href="">
                    <FaYoutube size={30} color="#000"/>
                </a>

                <a href="">
                    <FaTwitter size={30} color="#000" />
                </a>

                <a href="">
                    <FaInstagram size={30} color="#000"/>
                </a>

                <a href="">
                    <FaLinkedin size={30} color="#000"/>
                </a>

            </LinksContactsContainer>

        </FooterContainer>
    );
}
