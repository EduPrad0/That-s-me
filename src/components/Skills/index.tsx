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
                    technologies.map(skill => {
                    
                        if(skill.image.length < 4){
                            return;
                        }        

                        return (
                            <Skill>
                                <ImageFormat key={skill.id} tec={skill.image} nmr={skill.nmr}/>
                            </Skill>
                        );
                    })
                }
            </section>
        </Container>
    );
}