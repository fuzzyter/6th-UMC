import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getRedirectURI from '../RedirectURI';
import KakaoBtnImage from '../assets/images/kakaoBtn.png';
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const KakaoBtnImg = styled.img`
    width: 20vw;
    cursor: pointer;
`;

const LoginKakao = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const kakaoRestAPI = import.meta.env.VITE_REST_KEY;
    const redirectURI = getRedirectURI(); 
    const [code, setCode] = useState(null);
    console.log(kakaoRestAPI);

    const handleLoginKakao = () => {
        const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoRestAPI}&redirect_uri=${encodeURIComponent(redirectURI)}&response_type=code`;
        window.location.href = kakaoURL;
    };

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const code = params.get('code');
        if (code) {
            setCode(code);
        }
    }, [location]);

    useEffect(() => {
        if (code) {
            getAccessToken(code);
        }
    }, [code]);

    const getAccessToken = async (code) => {
        const createFormData = (params) => {
            const formData = new URLSearchParams();
            for (const key in params) {
                formData.append(key, params[key]);
            }
            return formData;
        };

        try {
            const response = await axios({
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                url: 'https://kauth.kakao.com/oauth/token',
                data: createFormData({
                    grant_type: 'authorization_code',
                    client_id: kakaoRestAPI,
                    redirect_uri: redirectURI,
                    code
                })
            });

            console.log(response.data);
            const accessToken = response.data.access_token;
            if (accessToken) {
                localStorage.setItem('token', accessToken);
                userInfo(accessToken);
            }
        } catch (err) {
            console.log('Error: ', err);
        }
    };

    const userInfo = async (accessToken) => {
        try {
            const response = await axios.get('https://kapi.kakao.com/v2/user/me', {
                headers: {'Authorization': `Bearer ${accessToken}`},
            });
            const username = response.data.kakao_account.profile.nickname;
            localStorage.setItem('username', username);
            localStorage.setItem('isLoggedIn', 'true'); // 로그인 상태 저장

            navigate("/");
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return <KakaoBtnImg src={KakaoBtnImage} alt="kakaoLogin" onClick={handleLoginKakao} />;
};

export default LoginKakao;
