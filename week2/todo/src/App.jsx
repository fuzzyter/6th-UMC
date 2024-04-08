import React, { useState } from 'react';
import './App.css';

function Todo() {
  const [inputText, setInputText] = useState('');
  const [todo, setTodo] = useState([]);
  const [completedTodo, setCompletedTodo] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      setTodo([...todo, inputText]);
      setInputText('');
    }
  };

  const handleCompleteTodo = (index) => {
    const completedTask = todo[index];
    setCompletedTodo([...completedTodo, completedTask]);
    const updatedTodo = todo.filter((_, i) => i !== index);
    setTodo(updatedTodo);
  };

  const handleDeleteTodo = (index) => {
    const updatedCompletedTodo = completedTodo.filter((_, i) => i !== index);
    setCompletedTodo(updatedCompletedTodo);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const renderTodos = (list, isCompleted) => {
    return list.map((todo, index) => (
      <div key={index}>
        <span>{todo}</span>
        {isCompleted ? (
          <button onClick={() => handleDeleteTodo(index)}>삭제</button>
        ) : (
          <button onClick={() => handleCompleteTodo(index)}>완료</button>
        )}
      </div>
    ));
  };

  return (
    <div className="title">
      <h2>UMC Study Plan</h2>
      <hr></hr>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="UMC 스터디 계획을 작성해보세요!"
      />
      <div className="todo-container">
        <div className="todo-column">
          <h3 id="todo">해야 할 일</h3>
          {renderTodos(todo)}
        </div>
        <div className="todo-column">
          <h3 id="completed">해낸 일</h3>
          {renderTodos(completedTodo, true)}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Todo></Todo>
    </div>
  );
}

export default App;