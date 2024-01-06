import { CommunityContainer, FeedbackItemContainer, FeedbackHeader, FeedbacksItens, FeedbackHeaderText, FeedbackItemBody, Stars, FeedbackItemFooter, Likes, ShareButton } from "./styles";
import person1 from '../../assets/images/person1.png'
import recipe1 from '../../assets/images/recipe11.png'
import { FaStar } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { CiShare2 } from "react-icons/ci";



export function Community(){
    return(
        <CommunityContainer>
            <h2>Da Nossa Comunidade</h2>
            <FeedbacksItens>
                <FeedbackItemContainer>
                    <FeedbackHeader>
                        <img src={person1} alt="" />
                        <FeedbackHeaderText>
                            <h4>Spaghetti Bolognesse</h4>
                            <span>Lady Rudy</span>
                        </FeedbackHeaderText>
                    </FeedbackHeader>
                    <FeedbackItemBody>
                        <Stars>
                            <FaStar color="#FFC567" size={25}/>
                            <FaStar color="#FFC567" size={25}/>
                            <FaStar color="#FFC567" size={25}/>
                            <FaStar color="#FFC567" size={25}/>
                            <FaStar color="#FFC567" size={25}/>

                        </Stars>

                        <p>
                            I have to say, your Spaghetti Bolognese recipe is nothing short of amazing! I've always been a fan of Italian cuisine, but I was a bit intimidated by the idea of making this classic at home.
                        </p>

                        <img src={recipe1} alt="" />
                        

                    </FeedbackItemBody>
                    <FeedbackItemFooter>
                        <Likes>
                            <BiLike size={25}/>
                            <p>2</p>
                        </Likes>
                        <ShareButton>
                            <CiShare2 size={25} />
                            <p>Compartinhar</p>
                        </ShareButton>
                    </FeedbackItemFooter>
                </FeedbackItemContainer>
                 <FeedbackItemContainer>
                    <FeedbackHeader>
                        <img src={person1} alt="" />
                        <FeedbackHeaderText>
                            <h4>Spaghetti Bolognesse</h4>
                            <span>Lady Rudy</span>
                        </FeedbackHeaderText>
                    </FeedbackHeader>
                    <FeedbackItemBody>
                        <Stars>
                            <FaStar color="#FFC567" size={25}/>
                            <FaStar color="#FFC567" size={25}/>
                            <FaStar color="#FFC567" size={25}/>
                            <FaStar color="#FFC567" size={25}/>
                            <FaStar color="#FFC567" size={25}/>

                        </Stars>

                        <p>
                            I have to say, your Spaghetti Bolognese recipe is nothing short of amazing! I've always been a fan of Italian cuisine, but I was a bit intimidated by the idea of making this classic at home.
                        </p>

                        <img src={recipe1} alt="" />
                        

                    </FeedbackItemBody>
                    <FeedbackItemFooter>
                        <Likes>
                            <BiLike size={25}/>
                            <p>2</p>
                        </Likes>
                        <ShareButton>
                            <CiShare2 size={25} />
                            <p>Compartinhar</p>
                        </ShareButton>
                    </FeedbackItemFooter>
                </FeedbackItemContainer>
            </FeedbacksItens>
        </CommunityContainer>
    )
}