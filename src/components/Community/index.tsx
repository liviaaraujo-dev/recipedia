import { CommunityContainer, FeedbackItemContainer, FeedbackHeader, FeedbacksItens, FeedbackHeaderText, FeedbackItemBody, Stars, FeedbackItemFooter, Likes, ShareButton } from "./styles";
import person1 from '../../assets/images/person1.png';
import recipe1 from '../../assets/images/recipe7.png';
import person2 from '../../assets/images/person2.png';
import recipe2 from '../../assets/images/recipe8.png';
import person3 from '../../assets/images/person3.png';
import recipe3 from '../../assets/images/recipe9.png';
import person4 from '../../assets/images/person4.png';
import recipe4 from '../../assets/images/recipe10.png';
import { FaStar } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { CiShare2 } from "react-icons/ci";
import { CommunityInterface } from "../../utils/interface/community";



export function Community(){

    const feedbackList: CommunityInterface[] = [
        {
            recipeName: "Espaguete Bolognesse",
            nameUser: "Lady Rudy",
            description: "Eu tenho que dizer, sua receita de espaguete à bolonhesa é nada menos que incrível! Sempre fui fã da culinária italiana, mas fiquei um pouco intimidado com a ideia de fazer esse clássico em casa.",
            imgRecipe: recipe1,
            likes: 2,
            photoUser: person1
        },
        {
            recipeName: "Frango assado",
            description: "Eu sempre fui um pouco hesitante em assar um frango inteiro, temendo que pudesse ser muito complicado, mas sua receita mudou isso para mim. As instruções eram tão claras e fáceis de seguir",
            nameUser: "Emily Rose",
            likes: 9,
            imgRecipe: recipe2,
            photoUser: person2
        },
        {
            recipeName: "Torta de Panela de Legumes",
            description: "Eu sempre fui um fã de comida de conforto saudável, e a receita 'Ultimate Vegetable Pot Pie' nesta plataforma excedeu completamente minhas expectativas.",
            nameUser: "Susan H",
            likes: 4,
            imgRecipe: recipe3,
            photoUser: person3
        },
        {
            recipeName: "Salada de jardim fresca",
            description: "Sempre me considerei um entusiasta de saladas, e esta receita de salada é nada menos que uma obra-prima culinária e levou meu amor por verduras a um nível totalmente novo.",
            nameUser: "Lilac Laura",
            likes: 3,
            imgRecipe: recipe4,
            photoUser: person4
        }
    ]

    return(
        <CommunityContainer id="community">
            <h2>Da Nossa Comunidade</h2>
            
            <FeedbacksItens>
            {
                feedbackList.map(feedback => 
                    <FeedbackItemContainer>
                        <FeedbackHeader>
                            <img src={feedback.photoUser} alt="Usuário" />
                            <FeedbackHeaderText>
                                <h4>{feedback.recipeName}</h4>
                                <span>{feedback.nameUser}</span>
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

                            <p>{feedback.description}</p>

                            <img src={feedback.imgRecipe} alt={feedback.recipeName} />

                        </FeedbackItemBody>
                        <FeedbackItemFooter>
                            <Likes>
                                <BiLike size={25}/>
                                <p>{feedback.likes}</p>
                            </Likes>
                            <ShareButton>
                                <CiShare2 size={25} />
                                <p>Compartinhar</p>
                            </ShareButton>
                        </FeedbackItemFooter>
                    </FeedbackItemContainer>
                )
            }
            
                 
            </FeedbacksItens>
        </CommunityContainer>
    )
}
