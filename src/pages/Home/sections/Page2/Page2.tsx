import  { useState } from 'react';
import IconSolar from "../../../assets/solar-2d0cae9b.png";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from 'react-router-dom';
import './Page2.css';

const Page2 = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleNextPage = () => {
        const numericValue = parseFloat(inputValue.replace('R$', '').replace(',', '.'));
        if (!isNaN(numericValue)) {
            const valueFormatted = numericValue.toFixed(2);
            localStorage.setItem('inputValue', valueFormatted);
            navigate('/5');
        } else {
            alert('Por favor, insira um valor válido.');
        }
    };

    return (
        <header>
            <div className="Container1" id="AvatarPage2">
    
            </div>
            <div className="Container2">
                <div className="VoltarCarregamento">
                    <Link to="/3" id="buttonRetornar">
                        <ArrowBackIosIcon />
                    </Link>
                    <div className="barraCarregamento"></div>
                </div>
                <div id="fotoPage2">
                    <img src={IconSolar} alt="Ícone Solar" />
                </div>
                <h5 id="h5Page2">Energia limpa, sustentável e renovável!</h5>
                <p id="ParagrafroInicio2">
                    O uso de energias renováveis está em um crescimento vertiginoso em todo o mundo e a energia solar avança
                    como uma das matrizes que mais crescem neste ramo. Entre para este Mundo Energético. Seja SOLARIS ENERGIA!
                </p>
                <h2 id="h2Page2">Quanto você paga por mês na fatura de energia?</h2>
                <input
                    type="text"
                    id="inputPage2"
                    placeholder="R$379,90"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleNextPage} id="buttonProximoPage2">Próximo</button>
            </div>
        </header>
    );
};

export default Page2;
