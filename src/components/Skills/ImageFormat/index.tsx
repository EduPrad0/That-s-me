import { useEffect, useState } from "react";
import { Fil } from "../styles";

interface imagensProps {
    tec: string[];
    nmr: number; 
}

export function ImageFormat(data: imagensProps){
    // data-aos="fade-left"

    const [ lado, setLado ] = useState('') 
    
    useEffect(()=>{
        if(data.nmr % 2 === 0){
            setLado(`fade-left`)
        }else {
            setLado(`fade-right`)
        }
    },[data.nmr])

    return(
        <Fil>
        <div data-aos={lado}>
            {
                data.tec.map(skill => {
                    return (
                        <img src={skill} alt="" />
                    )
                })
            }
        </div>
        </Fil>
    )
}

