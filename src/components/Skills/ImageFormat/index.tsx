import { useEffect, useState } from "react";
import { Fil } from "../styles";

interface imagensProps {
    tec: string[];
    nmr: number; 
}

export function ImageFormat(data: imagensProps){
    return(
        <Fil>
        <div data-aos={data.nmr % 2 === 0 ? 'fade-left' : 'fade-right'}>
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

