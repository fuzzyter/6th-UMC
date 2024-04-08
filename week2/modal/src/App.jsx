import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [isModal, setIsModal] = useState(false)
  
  function open(){
    setIsModal(true);
  }

  function close(){
    setIsModal(false);
  }

  return (
    <>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <div>
        <button onClick={open}>버튼 열기</button>
        {isModal && <Modal close={close} />}
      </div>
    </>
  )
}

export default App
