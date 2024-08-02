import React, { useState } from 'react';
import "styled-components";
import wallpaperPage4 from "../../../assets/combustivelposto-1024x597.png";
import "./Page4.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from 'react-router-dom';

const Page4: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const navigate = useNavigate();

    // Função para validar o formato do e-mail
    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Função para validar o número de telefone (apenas números)
    const isValidPhone = (phone: string) => {
        const phoneDigits = phone.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        // Verifica se o número de telefone contém pelo menos 10 dígitos
        return phoneDigits.length >= 10;
    };

    // Função para validar a cidade
    const isValidCity = (city: string) => {
        // Verifica se a cidade não está vazia e contém apenas letras e espaços
        const cityRegex = /^[a-zA-Z\s]+$/;
        return city.trim() !== "" && cityRegex.test(city);
    };

    const handleNextPage = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (email.trim() === "" || phone.trim() === "" || city.trim() === "") {
            event.preventDefault();
            alert("Por favor, preencha todos os campos antes de prosseguir.");
        } else if (!isValidEmail(email)) {
            event.preventDefault();
            alert("Por favor, insira um e-mail válido.");
        } else if (!isValidPhone(phone)) {
            event.preventDefault();
            alert("Por favor, insira um número de telefone válido (somente números).");
        } else if (!isValidCity(city)) {
            event.preventDefault();
            alert("Por favor, insira uma cidade válida (apenas letras e espaços).");
        } else {
            navigate("/4");
        }
    };

    return (
        <>
            <header>
                <div className="Container1">
                    <img src={wallpaperPage4} style={{ width: "200%" }} alt="Background" />
                </div>

                <div className="Container2">
                    <div className="VoltarCarregamento4">
                        <Link to="/2" id="buttonRetornar3"> <ArrowBackIosIcon /> </Link>
                        <div className="barraCarregamento4">
                        </div>
                    </div>

                    <h5 style={{ fontSize: "18px", color: "rgba(48, 47, 47, 0.699)", textAlign: "left", marginBottom: "10px" }}>
                        Que tal gerar sua própria energia?
                    </h5>

                    <p id="ParagrafroInicio3">
                        Conte com a ME Energia Solar para economizar até 95% na sua conta de luz! Nós temos experiência
                        de sobra para levar as melhores soluções de energia solar para sua casa, comércio, indústria e
                        ou seu agronegócio.
                    </p>

                    <h2 id="h2Page4">Qual seu e-mail?</h2>
                    <input
                        type="text"
                        id="inputPage4"
                        placeholder="exemplo@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h2 id="h2Page4">E seu telefone?</h2>
                    <input
                        type="text"
                        id="inputPage4"
                        placeholder="(99) 9 8834-6472"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <h2 id="h2Page4">Por último, sua cidade?</h2>
                    <input
                        type="text"
                        id="inputPage4"
                        placeholder="Açailândia"
                        style={{ marginBottom: "80px" }}
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />

                    <a href="/4" id="buttonProximoPage2" className="HoverButton" onClick={handleNextPage}>Próximo</a>
                </div>
            </header>
        </>
    );
}

export default Page4;
