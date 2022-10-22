import { CardContainer } from "./Card.style";
import { CardInformations } from "../CardInformations/CardInformations";
import { Content } from "../Content/Content";

export const Card = () => {
    return(
        <CardContainer>
            <CardInformations></CardInformations>
            <Content></Content>
        </CardContainer>
    )
};
