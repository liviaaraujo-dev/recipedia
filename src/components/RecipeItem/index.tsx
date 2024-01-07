import {
  BottomContainer,
  DataItem,
  RecipeData,
  RecipeItemContainer,
} from "./styles";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import { BsBarChartFill } from "react-icons/bs";
import { RecipeInterface } from "../../utils/interface/recipe";

export function RecipeItem(props: RecipeInterface) {

  return (
    <RecipeItemContainer>
      <img src={props.img} alt={`${props.name} imagem`} />

      <RecipeData>
        <DataItem>
          <MdAccessTimeFilled size={20} color="#046E1B" />
          <p>{props.mins} Mins</p>
        </DataItem>
        <DataItem>
          <IoPersonCircle size={20} color="#046E1B" />
          <p>{props.qtPersons} Serving</p>
        </DataItem>
        <DataItem>
          <BsBarChartFill size={20} color="#046E1B" />
          <p>{props.level}</p>
        </DataItem>
      </RecipeData>

      <BottomContainer>
        <h3>{props.name}</h3>
        <a href={props.link}>Ver receita</a>
      </BottomContainer>
    </RecipeItemContainer>
  );
}
