import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

<div id="window">
        <h2>회원가입</h2>
        <hr>

        <div>
            <p id="nameP">이름</p>
            <input type="text" id="name">
            <p id="nameError"></p>

            <p id="emailP">이메일</p>
            <input type="text" id="email">
            <p id="emailError"></p>

            <p id="ageP">나이</p>
            <input type="number" id="age">
            <p id="ageError"></p>

            <p id="passwordP">비밀번호</p>
            <input type="password" id="password">
            <p id="passwordError"></p>

            <p id="pwcheckP">비밀번호 확인</p>
            <input type="password" id="pwcheck">
            <p id="pwcheckError"></p>

            <button id="signupBT" type="button">제출하기</button>
        </div>
    </div>