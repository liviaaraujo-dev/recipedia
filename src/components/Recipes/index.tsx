import { ButtonPrimary } from "../ButtonPrimary";
import { RecipeItem } from "../RecipeItem";
import recipe1 from "../../assets/images/recipe1.png";
import recipe2 from "../../assets/images/recipe2.png";
import recipe3 from "../../assets/images/recipe3.png";
import recipe4 from "../../assets/images/recipe4.png";
import recipe5 from "../../assets/images/recipe5.png";
import recipe6 from "../../assets/images/recipe6.png";
import { RecipesContainer, RecipesHeaderContainer, RecipesItens } from "./styles";

export function Recipes(){
    const recipesList = [
        {
            name: "Salada Cremosa",
            link: "",
            mins: 25,
            qtPersons: 2,
            level: "Fácil",
            img: recipe1
        },
        {
            name: "Sopa de tomates",
            link: "",
            mins: 15,
            qtPersons: 3,
            level: "Fácil",
            img: recipe2
        },
          {
            name: "Batatas crocantes",
            link: "",
            mins: 10,
            qtPersons: 2,
            level: "Fácil",
            img: recipe3
        },
          {
            name: "Sopa de Cogumelos",
            link: "",
            mins: 25,
            qtPersons: 2,
            level: "Médio",
            img: recipe4
        },
          {
            name: "Panqueca de framboesa",
            link: "",
            mins: 30,
            qtPersons: 1,
            level: "Fácil",
            img: recipe5
        },
          {
            name: "Teriyaki de carne",
            link: "",
            mins: 25,
            qtPersons: 1,
            level: "Fácil",
            img: recipe6
        },
    ];

    return (
    <RecipesContainer id="recipes">
        <RecipesHeaderContainer>
            <div>
                <h2>Descubra, Crie, Compartilhe</h2>
                <p>Confira nossas receitas mais populares desta semana</p>
            </div>
            <ButtonPrimary text="Ver todas" onClick={()=>{}}/>
        </RecipesHeaderContainer>
        <RecipesItens>
            {
                recipesList.map(recipe => <RecipeItem level={recipe.level} name={recipe.name} mins={recipe.mins} qtPersons={recipe.qtPersons} link={recipe.link} img={recipe.img}/>  )
            }
        </RecipesItens>
    </RecipesContainer>)
}
