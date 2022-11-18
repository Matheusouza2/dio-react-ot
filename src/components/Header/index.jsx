import { Button } from "../../components/Button";
import { 
    Container,
    Row,
    Menu,
    MenuRight,
    BuscarInputContainer,
    Input,
    Wrapper
} from "./styles";

const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src="https://hermes.digitalinnovation.one/assets/diome/logo.svg" width="82px" alt="Logo da DIO" />
                <BuscarInputContainer>
                    <Input placeholder="Buscar..."/>
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href="#">Home</MenuRight>
                <Button title="Entrar"/>
                <Button title="Cadastrar"/>
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }