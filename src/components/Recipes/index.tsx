import { ButtonPrimary } from "../ButtonPrimary";
import { RecipeItem } from "../RecipeItem";
import recipe1 from "../../assets/images/recipe1.png";
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
            name: "Salada Cremosa",
            link: "",
            mins: 25,
            qtPersons: 2,
            level: "Fácil",
            img: recipe1
        },
          {
            name: "Salada Cremosa",
            link: "",
            mins: 25,
            qtPersons: 2,
            level: "Fácil",
            img: recipe1
        },
          {
            name: "Salada Cremosa",
            link: "",
            mins: 25,
            qtPersons: 2,
            level: "Fácil",
            img: recipe1
        },
          {
            name: "Salada Cremosa",
            link: "",
            mins: 25,
            qtPersons: 2,
            level: "Fácil",
            img: recipe1
        },
          {
            name: "Salada Cremosa",
            link: "",
            mins: 25,
            qtPersons: 2,
            level: "Fácil",
            img: recipe1
        },
    ];

    return (
    <RecipesContainer>
        <RecipesHeaderContainer>
            <div>
                <h2>Descubra, Crie, Compartilhe</h2>
                <p>Confira nossas receitas mais populares desta semana</p>
            </div>
            <ButtonPrimary text="Ver todas" onClick={()=>{}}/>
        </RecipesHeaderContainer>
        <RecipesItens>
            {
                recipesList.map(recipe => <RecipeItem level={recipe.level} name={recipe.name} mins={recipe.mins} qtPersons={recipe.qtPersons} link={recipe.link} img={recipe1}/>  )
            }
        </RecipesItens>
    </RecipesContainer>)
}
