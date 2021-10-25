import { AnimationImg, Container } from "../styles";
import code from '../../../assets/codeGenerator.png'
import { useState } from "react";

export function Codeqr(){
    return (
        <>
            <Container>
                <div>
                    <div>
                        <img src={code} alt="" />
                    </div> 
                </div>
                <section>
                    <h2>Projeto <span>Product QrCode</span></h2>
                    <p>
                        O projeto foi criado em 2021, com a simples ideia de cadastro de produtos e
                         gerenciamento. Porém ele chega com um diferencial excelente. 
                        O Product QrCode não só gerencia seus produtos, como gera um qrcode que você pode 
                        utilizar em qualquer lugar e acessar de qualquer dispositivo com leitor de qrcode.
                        O projeto foi desenvolvido em NextJs e prisma 2, o prototipo ja foi lançado, entre com as credenciais e verifique !. <br />
                        <span>
                        login: admin <br />
                        password: 123
                        </span>
                    </p>
                    <a href="https://qrcodeapp-edu-card.herokuapp.com/" rel="noopener noreferrer" target="_blank">Qr-codeApp</a>
                </section>
            </Container>
        </>
    )
}