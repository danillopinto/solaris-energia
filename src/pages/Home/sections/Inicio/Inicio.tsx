
import Avatar from "../../../assets/energia-solar.jpg"
import Logo from "../../../assets/logo.png"
import "./Inicio.css"
import "styled-components"
import { Link } from "react-router-dom"

const Inicio = () => {


    return (

        <>

            <header>



                <div className="Container1">

                    <img src={Avatar} id="AvatarInicio" />

                </div>

                <div className="Container2">

                    <img src={Logo} id="LogoInicio" />

                    <h1 id="h1Inicio">Simule sua <strong>economia</strong> <br />
                        com energia solar</h1>

                    <p id="ParagrafroInicio">
                        Transforme a luz do sol em economia e sustentabilidade com a <strong>Solaris Energia</strong> – onde a energia solar ilumina o futuro.
                    </p>

                    <Link to="/2" id="buttonProximo">Começar simulação</Link>

                </div>

            </header>


        </>
    )
}

export default Inicio

