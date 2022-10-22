import { TabsStyled, TabList, TabInformations } from "./Tabs.style";
import { useState } from "react";
import { FcInfo, FcShare, FcSmartphoneTablet,  } from 'react-icons/fc'
import Curriculo from '../../docs/Curriculo.pdf'

export const Tabs = (props) => {
    const [activeTab, setActiveTab] = useState(1)

    const handleTab = (index) => {
        console.log(index)
        setActiveTab(index)
    }


    return (
        <>
            <TabsStyled>
                <TabList className={activeTab === 1 ? "tab selected" : "tab"} onClick={() => handleTab(1)}><FcInfo style={{ fontSize: "30px" }}/></TabList>
                <TabList className={activeTab === 2 ? "tab selected" : "tab"} onClick={() => handleTab(2)}><FcShare style={{ fontSize: "30px" }}/></TabList>
                <TabList className={activeTab === 3 ? "tab selected" : "tab"} onClick={() => handleTab(3)}><FcSmartphoneTablet style={{fontSize:"30px"}}/></TabList>
            </TabsStyled>
            <TabInformations>
                <div className={activeTab === 1 ? "information selected" : "information"}>
                    <h3 className="sub-title">About</h3>
                    <div className="description">
                        <p>Hello! Meu nome é Pablo Viana, seja bem-vindo(a)!</p>
                        <p>Sou um cara tranquilo, até demais. Inicialmente, o meu objetivo não era a área de desenvolvimento, mas ao longo do tempo passei a ver com outros olhos e hoje em dia é o que mais gosto. As linguagens que atualmente estou aprendendo são: <span className="languages"> HTML, CSS, JavaScript e React</span>. Gosto muito de café (até demais), e meus principais hobbies são jogar, ficar atoa e ajudar iniciantes na programação.</p>
                    </div>
                </div>
                <div className={activeTab === 2 ? "information selected" : "information"}>
                    <h3 className="sub-title">Networking</h3>
                    <ul className="social-networks">
                        <li>
                            <a href={Curriculo} target={"_blank"} rel="noopener noreferrer">Currículo</a>
                        </li>
                        <li>
                            <a href="https://github.com/pablovianas" target={"_blank"} rel="noopener noreferrer">Github</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/pablo-viana-santos/" target={"_blank"} rel="noopener noreferrer">Linkedln</a>
                        </li>
                    
                    </ul>
                </div>
                <div className={activeTab === 3 ? "information selected" : "information"}>
                    <h3 className="sub-title">Main Projects</h3>
                    <ul className="projects">
                        <li>
                            <div>
                                <a href="https://pokedex-react-gk3mvh1gp-pablovianas.vercel.app/" target={"_blank"} rel="noopener noreferrer"> Pokedex-React</a>
                                <a href="https://github.com/pablovianas/pokedex-react" target={"_blank"} rel="noopener noreferrer">Code</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="https://pablovianas.github.io/dev-weather/" target={"_blank"} rel="noopener noreferrer"> Dev-Weather</a>
                                <a href="https://github.com/pablovianas/dev-weather" target={"_blank"} rel="noopener noreferrer">Code</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="https://pablovianas.github.io/advice-generator-app/" target={"_blank"} rel="noopener noreferrer"> Advice Generator App</a>
                                <a href="https://github.com/pablovianas/advice-generator-app" target={"_blank"} rel="noopener noreferrer">Code</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="https://pablovianas.github.io/rest-api-countries/index.html" target={"_blank"} rel="noopener noreferrer">Rest Countries API</a>
                                <a href="https://github.com/pablovianas/rest-api-countries" target={"_blank"} rel="noopener noreferrer">Code</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="https://pablovianas.github.io/ip-address-tracker/" target={"_blank"} rel="noopener noreferrer">IP Address Tracker</a>
                                <a href="https://github.com/pablovianas/ip-address-tracker" target={"_blank"} rel="noopener noreferrer">Code</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="https://pablovianas.github.io/github-api/" target={"_blank"} rel="noopener noreferrer">Github API</a>
                                <a href="https://github.com/pablovianas/github-api" target={"_blank"} rel="noopener noreferrer">Code</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="https://pablovianas.github.io/poke-search/" target={"_blank"} rel="noopener noreferrer">PokeSearch</a>
                                <a href="https://github.com/pablovianas/poke-search" target={"_blank"} rel="noopener noreferrer">Code</a>
                            </div>
                        </li>  
                    </ul>
                </div>
            </TabInformations>
        </>
    )
};
