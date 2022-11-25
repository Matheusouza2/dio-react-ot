import { Button } from "../../components/Button";
import { 
    Container,
    Row,
    Menu,
    MenuRight,
    BuscarInputContainer,
    Input,
    Wrapper,
    UserPicture
} from "./styles";

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src="https://hermes.digitalinnovation.one/assets/diome/logo.svg" width="82px" alt="Logo da DIO" />
                {autenticado ? 
                [   <>
                    <BuscarInputContainer>
                        <Input placeholder="Buscar..."/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                    </>
                ]: null}
            </Row>
            <Row>
                {autenticado ? 
                [<UserPicture src="https://hermes.digitalinnovation.one/users/student/4daf7a60-907c-483d-bc94-7314a7ac40d0.jpg"></UserPicture>]:
                [
                    <>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar"/>
                    <Button title="Cadastrar"/>
                    </>
                ]}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }