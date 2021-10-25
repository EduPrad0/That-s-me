import { ButtonStyle } from "./styles";

interface textProps{
    name: string;
}
export function Button(text: textProps){
    return(
        <ButtonStyle>
                {text.name}
        </ButtonStyle>
    );
}