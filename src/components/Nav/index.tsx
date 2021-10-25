import { Container } from "./styles";
import GitHubIcon from "../../assets/github.png";

export function Nav(){
    
    return(
        <Container> 
            <button className="hm">
                <span>@eduPrad0</span>
            </button>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#portfolio">Portfólio</a></li>
                <li><a href="#footer">Contato</a></li>
            </ul>

            <button>
                <img src={ GitHubIcon } alt="GitHub" />
                <a href="https://github.com/EduPrad0" target="_blank" rel="noopener noreferrer">Eduardo Do Prado</a>
            </button>
        </Container>
    );
}