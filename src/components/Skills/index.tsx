import { useEffect } from "react";
import { Container, Skill } from "./styles";

import Aos from 'aos';
import 'aos/dist/aos.css'
import { technologies } from "./technologies";
import { ImageFormat } from "./ImageFormat";

export function Skills(){
    useEffect(()=>{
        Aos.init({duration: 3000});
       },[])
   
    return(
        <Container>
            <div>
                <h1>My skills and technologies</h1>
            </div>

            <section>
                {
                    technologies.map(element => {
                        return (
                            <Skill>
                                <ImageFormat key={element.id} tec={element.image} nmr={element.nmr}/>
                            </Skill>
                        );
                    })

                }
            </section>
        </Container>
    );
}