import React, { useEffect, useState } from 'react';
import {  Link } from 'react-router-dom';
import Logo from "../../../assets/logo.png";
import './Page5.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Page5: React.FC = () => {
    const [h3Value, setH3Value] = useState('0.00');
    const [economiaMensal, setEconomiaMensal] = useState('0.00');

    useEffect(() => {
        const inputValue = localStorage.getItem('inputValue');
        if (inputValue) {
            const numericValue = parseFloat(inputValue);
            if (!isNaN(numericValue)) {
                const h3DiscountedValue = numericValue * 0.1; 
                setH3Value(h3DiscountedValue.toFixed(2));

                const economia = numericValue - (numericValue * 0.1);
                setEconomiaMensal(economia.toFixed(2));
            }
        }
    }, []);

    return (
        <header>
            <div className="Container1" id="AvatarPage5">
                
            </div>
            <div className="Container2">
                <img src={Logo} id="LogoPage5" alt="Logo" />
                <h4 style={{ fontSize: "27px", color: "rgba(48, 47, 47, 0.699)", textDecoration: "line-through" }}>
                    R$ {localStorage.getItem('inputValue')}
                </h4>
                <h3 style={{ fontSize: "65px", color: "#50ad0e", fontWeight: "600" }} id="h3Page5">
                    R$ {h3Value}
                </h3>
                <p style={{ fontSize: "18px", color: "#50ad0e", fontWeight: "600", marginTop: "-10px" }}>
                    Valor que você poderia estar pagando
                </p>
                <div style={{ textAlign: "left" }}>
                    <p style={{ fontSize: "20px", color: "rgba(48, 47, 47, 0.699)" }}>Investimento</p>
                    <p style={{ fontSize: "23px", color: "rgba(48, 47, 47, 0.699)", fontWeight: "600", marginBottom: "12px" }}>
                        Entre R$ 3.754,90 e R$ 4.318,14
                    </p>
                    <p style={{ fontSize: "20px", color: "rgba(48, 47, 47, 0.699)" }}>Economia mensal</p>
                    <p style={{ fontSize: "23px", color: "rgba(48, 47, 47, 0.699)", fontWeight: "600", marginBottom: "12px" }} id='EconomiaMensal'>
                        R$ {economiaMensal}
                    </p>
                    <p style={{ fontSize: "20px", color: "rgba(48, 47, 47, 0.699)" }}>Retorno</p>
                    <p style={{ fontSize: "23px", color: "rgba(48, 47, 47, 0.699)", fontWeight: "600", marginBottom: "18px" }}>
                        Entre 41 e 42 meses
                    </p>
                </div>
                <p style={{
                    fontSize: "16px",
                    color: "#020F59",
                    padding: "7px",
                    border: "1px solid #020F59",
                    borderRadius: "7px",
                    marginBottom: "25px"
                }}>
                    Instale seu sistema com nosso parcelamento próprio com entrada a partir de R$ 1.126,47
                </p>
                <Link to="/" id="buttonRetornar5"> Quero fazer outra simulação </Link>
                <div style={{ textAlign: "center", marginTop: "28px" }}>
                    <a href="https://wa.me/5599988346472" target="_blank" rel="noopener noreferrer" id="buttonProximoPage5" style={{gap: "10px", display: "flex", alignItems: "center"}}>
                         <WhatsAppIcon style={{fontSize: "20px"}} /> Falar com especialista
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Page5;
