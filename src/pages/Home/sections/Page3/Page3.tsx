import React, { useState } from 'react';
import "styled-components";
import wallpaperPage3 from "../../../assets/medium-shot-environmental-engineer-holding-laptop.webp";
import "./Page3.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from 'react-router-dom';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FactoryIcon from '@mui/icons-material/Factory';

const Page3: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [selectedIcon, setSelectedIcon] = useState<boolean>(false); // Adiciona estado para verificar seleção do ícone
    const navigate = useNavigate();

    const handleNextPage = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (name.trim() === "") {
            event.preventDefault(); // Impede a navegação
            alert("Por favor, preencha seu nome antes de prosseguir.");
        } else if (!selectedIcon) {
            event.preventDefault(); // Impede a navegação
            alert("Por favor, escolha um tipo de unidade consumidora.");
        } else {
            navigate("/3");
        }
    };

    const handleIconClick = () => {
        setSelectedIcon(true); // Marca que um ícone foi selecionado
    };

    return (
        <>
            <header>
                <div className="Container1">
                    <img src={wallpaperPage3} id="AvatarPage3" alt="Background" style={{ width: "170%", marginLeft: "-350px" }} />
                </div>

                <div className="Container2">
                    <div className="VoltarCarregamento3">
                        <Link to="/" id="buttonRetornar3"> <ArrowBackIosIcon /> </Link>
                        <div className="barraCarregamento3">
                        </div>
                    </div>

                    <h5 id="h5Page2">Equipamentos confiáveis e instalação de ótima qualidade!</h5>

                    <p id="ParagrafroInicio3">
                        Um sistema de geração de energia elétrica com luz do sol deve ser feito para durar muito tempo, utilizando
                        equipamentos confiáveis e instalação de ótima qualidade. A SOLARIS ENERGIA assegura um suporte e relacionamento
                        de longo prazo com nossos clientes, de forma que o sistema de energia solar fotovoltaica continue com eficiência
                        maximizada, mesmo depois de muitos anos da instalação.
                    </p>

                    <h2 id="h2Page2">Qual seu nome?</h2>

                    <input
                        type="text"
                        id="inputPage3"
                        placeholder="Ex: Danillo Carvalho"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <h2 id="h2Page2">Escolha o tipo de unidade consumidora:</h2>
                    <div id="IconesPage3">
                        <div id='iconsPage3' tabIndex={0} onClick={handleIconClick}> 
                            <AgricultureIcon style={{ cursor: "pointer", fontSize: "50px" }} /> 
                            <p style={{ fontSize: "12px", fontWeight: "600" }} >Rural</p> 
                        </div>
                        <div tabIndex={0} onClick={handleIconClick}> 
                            <HomeIcon style={{ cursor: "pointer", fontSize: "50px" }} /> 
                            <p style={{ fontSize: "12px", fontWeight: "600" }} >Residencial</p>
                        </div>
                        <div tabIndex={0} onClick={handleIconClick}> 
                            <ApartmentIcon style={{ cursor: "pointer", fontSize: "50px" }} /> 
                            <p style={{ fontSize: "12px", fontWeight: "600" }} >Comercial</p> 
                        </div>
                        <div tabIndex={0} onClick={handleIconClick}> 
                            <FactoryIcon style={{ cursor: "pointer", fontSize: "50px" }} /> 
                            <p style={{ fontSize: "12px", fontWeight: "600" }} >Industrial</p> 
                        </div>
                    </div>

                    <a href="/3" id="buttonProximoPage2" className="HoverButton" onClick={handleNextPage}>Próximo</a>
                </div>
            </header>
        </>
    );
}

export default Page3;
