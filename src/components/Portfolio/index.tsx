import { ContainerPort } from "./styles";
import { Codeqr } from "./Codeqr";
import { Curso } from "./Curso";
import { OtherProjects } from "./OthersProjects";


export function Portfolio(){
    
    
    return(
        <ContainerPort id="portfolio">
            <div> <h1>Portfólio</h1></div>
            <Codeqr />
            <Curso />
            <OtherProjects/>

        </ContainerPort>
    );
}