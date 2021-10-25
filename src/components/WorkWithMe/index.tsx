import { Button } from "../Button";
import { ContainerWorkWithMe } from "./styles";

export function WorkWithMe(){
    return(
        <ContainerWorkWithMe>
            <div>
                <h1>Trabalhe comigo</h1>
                <Button name={"Entre em contato !"}/>
            </div>
        </ContainerWorkWithMe>
    );
}