import React from 'react';

function Modal({close}){
    return(
        <div id="modal">
            <p>안녕하세요</p>
            <p>모달 내용은 어쩌고 저쩌고...</p>
            <button onClick={close}>닫기</button>
        </div>
    )
}


export default Modal