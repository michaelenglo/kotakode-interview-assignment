import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const tasks = useState([
    "Cuci Baju",
    "Masak Nasi"
  ]);
  return (
    <div className="App">
      <h1>Pekerjaan Rumah Yang Perlu Dilakukan</h1>
      <input value=""/>
      <button onClick="">Tambah</button>
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
