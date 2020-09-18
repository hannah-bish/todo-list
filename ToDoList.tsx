import React from 'react';
import { ToDoListItem } from './ToDoListItem';

interface Props {
  toDos: ToDo[];
  toggleToDo: ToggleToDo;
}

export const ToDoList: React.FC<Props> = ({ toDos, toggleToDo }) => {
  return (
    <ul>
      {
        toDos.map((toDoItem: ToDo) =>
          <ToDoListItem toDo={toDoItem} toggleToDo={toggleToDo} key={toDoItem.text} />
        )
      }
    </ul>
  );
};