import React,{ useState } from 'react';
import { ToDoList } from './ToDoList';
import { AddToDoForm } from './AddToDoForm';

const initialToDos: ToDo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

function App() {
  const [toDos, setToDos] = useState(initialToDos);
  
  const toggleToDo = (selectedToDo: ToDo) => {
    const newToDos = toDos.map(toDo => {
      if (toDo === selectedToDo) {
        return {
          ...toDo,
          complete: !toDo.complete,
        };
      }
      return toDo;
    });
    setToDos(newToDos);
  };

  const addToDo: AddToDo = (text: string) => {
    const newTodo = { text, complete: false };
    setToDos([...toDos, newTodo]);
  };

  return (
    <>
      <ToDoList toDos={toDos} toggleToDo={toggleToDo} />
      <AddToDoForm addToDo={addToDo} />
    </>
  );
}

export default App;
