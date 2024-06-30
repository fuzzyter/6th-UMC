import styled from 'styled-components';
import useUser from '../components/hooks/useUser';

const BannerContainer = styled.div`
  background-color: #1e2125;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  height: 20%;
  font-size: 20px;

    @media screen and (max-width: 600px) {
    padding: 30px 10px;
    font-size: 16px;
  }

  @media screen and (min-width: 601px) and (max-width: 1100px) {
    padding: 40px 15px;
    font-size: 18px;
  }

  @media screen and (min-width: 1101px) {
    padding: 50px 20px;
    font-size: 20px;
  }
`;

const WelcomeText = styled.h2`
  margin: 0;
`;

const Banner = () => {
  const { user, loading } = useUser();

  if (loading) {
    return <BannerContainer>로딩 중...</BannerContainer>;
  }

  return (
    <BannerContainer>
      <WelcomeText>{user ? `${user.name}님 환영합니다.` : '환영합니다'}</WelcomeText>
    </BannerContainer>
  );
};

export default Banner;
