import { BannerSmartphoneContainer, ButtonShop, ButtonsShopContainer } from "./style";
import smartphoneImg from "../../assets/images/smartphone.png"

import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";




export function BannerSmartphone(){
    return(
        <BannerSmartphoneContainer>
            <div className="text">
                 <h2>Abrace a alegria de cozinhar com obtê-lo em seu iPhone ou Android Sua aventura na cozinha começa agora!</h2>
                <ButtonsShopContainer>
                    <ButtonShop>
                        <FaApple size={35}/>
                        <div>
                            <span>Baixe na</span>
                            <p>App Store</p>
                        </div>
                    </ButtonShop>
                    <ButtonShop>
                        <FaGooglePlay size={35}/>
                        <div>
                            <span>Baixe no</span>
                            <p>Google Play</p>
                        </div>
                    </ButtonShop>
                </ButtonsShopContainer>

            </div>

            <img src={smartphoneImg} alt="" className="smart" />
        </BannerSmartphoneContainer>
    )
}