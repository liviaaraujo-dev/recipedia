import React from "react";
import { Button } from "./styles";

interface Props{
    text: string;
    onClick: Function;
}

export function ButtonPrimary(props: Props){
    return(
        <Button>
           {props.text}
        </Button>
    )
}
