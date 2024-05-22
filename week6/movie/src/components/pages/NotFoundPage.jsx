import { Container, MovieCard, Image, Info, Title, Rating } from '../../style/styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  background-color: #212348;
`;

const ErrorMessage = styled.h1`
  font-size: 24px;
`;

const BackButton = styled(Link)`
  padding: 10px 20px;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
`;

function NotFoundPage(){
    return (
        <>
            <Div>
                <Titlep>Oops!</Titlep>
                <Errorp>잘못된 주소입니다.</Errorp>
                <NotFoundp>Not Found</NotFoundp>
                <Link to="/">메인 페이지로 이동하기</Link>
    
            </Div>      
        </>
    );
}

export default NotFoundPage;