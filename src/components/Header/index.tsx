import { ButtonOpen, ContainerButtons, HeaderContainer, Navigation, Title } from "./styles";
import logo from '../../assets/images/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";

export function Header(){
    const [isMenu, setIsMenu] = useState(false);

    function openMenu(){
        setIsMenu(!isMenu)
    }

    return(
        <HeaderContainer className={isMenu ? 'open' : ''}>
            <div className="mobile-container">
                <Title>
                    <a href="#">
                        <img src={logo} alt="Recipedia Logo" />
                        Recipedia
                    </a>
                </Title>

                <ButtonOpen onClick={openMenu}>
                    {
                        isMenu ?  <IoClose size={30} /> :     <GiHamburgerMenu size={25}/>
                    }
                
                </ButtonOpen>
            </div>

            <Navigation className={isMenu ? 'open' : ''}>
                <ul className={isMenu ? 'open' : ''}>
                    <li><a href="">Home</a></li>
                    <li><a href="">Receitas</a></li>
                    <li><a href="">Comunidade</a></li>
                    <li><a href="">Quem somos</a></li>
                </ul>
           </Navigation>

           <ContainerButtons>
                <button>
                <CiSearch size={30} />
                    
                </button>
                <button>

                <GoPerson size={30} />
                </button>
           </ContainerButtons>
        </HeaderContainer>
    )
}
