import dtmoney from '../../../assets/DtMoney.png'
import ignews from '../../../assets/Ignews.png'
import letme from '../../../assets/letme.png'
import todo from '../../../assets/Todo.png'

import { Divizinha } from "../styles";

interface elementProps {
    name: string;
    description: string;
    link: string;
    img: string;

}

export function OtherProjects(){
    
    const first = [
        {
            name: "DtMoney",
            description: "DtMoney, Controlador de finanças",
            link: "https://github.com/EduPrad0/Project_DTmoney",
            img: dtmoney,
        },
        {
            name: "Ig-news",
            description: "Aplicativo de cadastro de webVendas",
            link: "#",
            img: ignews

        },
        
    ]

    const second = [
        {
            name: "Let Me Ask",
            description: "WebAplicação de Lives(Em desenvolvimento)",
            link: "https://github.com/EduPrad0/Edu_LetMeAskRocket",
            img: letme,
        },
        {
            name: "To Do",
            description: "To Do list",
            link: "https://github.com/EduPrad0/ChapterOneReactjs",
            img: todo
        }
    ]
    

    return (
        <>
            <h1>Outros</h1>
            <Divizinha>
               <section>
                {
                   first.map(element => {
                       return(
                        <article>
                            <h3><a href={element.link}>{element.name}</a></h3>
                            <img src={element.img} alt=""/>
                            <p>{element.description}</p>
                            
                        </article>)
                   })
                }
               </section>
                <section className="two">
                {
                   second.map(element => {
                       return(
                        <article>
                            <h3><a href={element.link}>{element.name}</a></h3>
                            <img src={element.img} alt="" />
                            <p>{element.description}</p>
                        </article>)
                   })
                }
                </section>
            </Divizinha>
        </>
    )
}