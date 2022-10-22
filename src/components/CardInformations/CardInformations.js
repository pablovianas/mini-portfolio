import { Informations } from "./CardInformations.style";
import profilePic from '../../images/profile-pic.jpg'

export const CardInformations = () => {
    return (
        <Informations>
            <img src={profilePic} alt="Profile"></img>
            <h1 className="name">Pablo Viana</h1>
            <h2 className="occupation">Desenvolvedor Frontend Júnior</h2>
        </Informations>
    )
};
