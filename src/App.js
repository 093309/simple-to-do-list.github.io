import React, { useState } from 'react';
import './App.css';
import { BsCheck2 } from 'react-icons/bs';

function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  // Функция для добавления нового элемнета
  const addItem = () => {

    //Проверка на наличие пустого элемента
    if (!newItem) {
      alert('Введи задачу!');
      return;
    };
    //Добавить рандомный id к новому элементу
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    // Добавить новый элемент в массив
    setItems(oldList => [...oldList, item]);

    // Сбросить новый элемент в исходное состояние
    setNewItem('');
  }

  //Удаление элемента
  const removeItem = (id) => {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }
  return (
    <div className="App">
      {/* 1. Шапка  */}
      <h1>Todo List App</h1>

      {/* 2. Поле и кнопка */}
      <input
        type="text"
        placeholder='Введи задачу...'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />

      <button onClick={() => addItem()}>Добавить</button>

      {/* 3.Список с элементами */}

      <ul>

        {items.map(item => {
          return (
            <li key={item.id}>{item.value}<button onClick={() => removeItem(item.id)}>X</button></li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
