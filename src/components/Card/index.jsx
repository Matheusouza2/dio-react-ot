import {CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture} from './Styles';
import { FiThumbsUp } from 'react-icons/fi';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://hermes.digitalinnovation.one/articles/cover/0ed178c9-a9c4-482b-8c3f-6f166eee1741.jpg'/>

        <Content>
            <UserInfo>
                <UserPicture src="https://hermes.digitalinnovation.one/users/student/4daf7a60-907c-483d-bc94-7314a7ac40d0.jpg"/>
                <div>
                    <h4>Márcio Matheus</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>

            <PostInfo>
                <h4>Projeto para o Bootcamp Orange Tech</h4>
                <p>Projeto feito no Bootcamp Orange Tech durante as aulas de React...<strong>Saiba mais</strong></p>
            </PostInfo>

            <HasInfo>
                <h4>#CSS #JS #REACT #ORANGE_TECH</h4>

                <p>
                    <FiThumbsUp /> 16
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card };
