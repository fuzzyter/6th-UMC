import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ShareKakao from "../api/ShareKakao.jsx";
import getRedirectURI from '../RedirectURI';

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2c2f33;
  padding: 10px 20px;

  @media screen and (max-width: 800px) {
    display: none;
  }

`;

const Logo = styled.h1`
  color: white;
  font-size: 24px;
`;

const NavItems = styled.div`
  a {
    color: white;
    text-decoration: none;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;

    &:hover {
      background-color: #4f545c;
      border-radius: 4px;
      font-size: 17px;
    }
  }
`;

const Navbar = () => {
  const token = localStorage.getItem('token');

  /*
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };*/

  const handleLogout = async () => {
    const clientId = import.meta.env.VITE_REST_API_ACCESS;
    const logoutRedirectURI = getRedirectURI();
    const kakaoLogoutURL = `https://kauth.kakao.com/oauth/logout?client_id=${clientId}&logout_redirect_uri=${logoutRedirectURI}`;

    try { 
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setIsAuthenticated(false);
        window.location.href = kakaoLogoutURL;
    } catch (error) {
        console.error('Logout Error: ', error);
    }
};

  return (
    <NavbarContainer>
      <Logo><NavLink to="/" style={{ color: 'white' }}>UMC Movie</NavLink><ShareKakao/></Logo>
      <NavItems>
        <NavLink to="/popular" style={({ isActive }) => isActive ? { color: 'yellow' } : null}>Popular</NavLink>
        <NavLink to="/nowplaying" style={({ isActive }) => isActive ? { color: 'yellow' } : null}>Now Playing</NavLink>
        <NavLink to="/toprated" style={({ isActive }) => isActive ? { color: 'yellow' } : null}>Top Rated</NavLink>
        <NavLink to="/upcoming" style={({ isActive }) => isActive ? { color: 'yellow' } : null}>Up Coming</NavLink>
        {!token ? (
          <>
            <NavLink to="/signup" style={({ isActive }) => isActive ? { color: 'yellow' } : null}>회원가입</NavLink>
            <NavLink to="/login" style={({ isActive }) => isActive ? { color: 'yellow' } : null}>로그인</NavLink>
          </>
        ) : (
          <button onClick={handleLogout} style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}>로그아웃</button>
        )}
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;
