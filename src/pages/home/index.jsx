import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button"
import { Header } from "../../components/Header";
import { Container, TextContent, Title, TitleHiglight } from "./styles";

const Home = () => {

    const navigate = useNavigate();

    const handleClickSingIn = () => {
        navigate('/login')
    };

    return (<> 
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHiglight>
                        Implemente <br />
                    </TitleHiglight>
                    o seu futuro global agora!
                </Title>

                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>

                <Button title="Começar agora" variant="secondary" onClick={handleClickSingIn}/>
            </div>

            <div>
                <img src="https://hermes.digitalinnovation.one/public/components/pages/home/header/banner-play.png" width="80%" alt="Banner"/>
            </div>
        </Container>
    </>)
}

export { Home }