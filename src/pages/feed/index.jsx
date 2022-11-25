import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Container, Column, Title, TitleHiglight } from "./styles";
import { UserInfo } from "../../components/UserInfo";

const Feed = () => {
    return (<> 
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            
            <Column flex={1}>
                <TitleHiglight># RANKING 5 TOP DA SEMANA</TitleHiglight>
                <UserInfo percentual={35} name="Márcio Matheus" image="https://hermes.digitalinnovation.one/users/student/4daf7a60-907c-483d-bc94-7314a7ac40d0.jpg" />
                <UserInfo percentual={50} name="Márcio Matheus" image="https://hermes.digitalinnovation.one/users/student/4daf7a60-907c-483d-bc94-7314a7ac40d0.jpg" />
                <UserInfo percentual={60} name="Márcio Matheus" image="https://hermes.digitalinnovation.one/users/student/4daf7a60-907c-483d-bc94-7314a7ac40d0.jpg" />
                <UserInfo percentual={80} name="Márcio Matheus" image="https://hermes.digitalinnovation.one/users/student/4daf7a60-907c-483d-bc94-7314a7ac40d0.jpg" />
            </Column>
        </Container>
    </>)
}

export { Feed }