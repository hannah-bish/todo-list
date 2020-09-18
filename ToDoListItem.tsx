import React from 'react';

interface ToDo {
  text: string;
  complete: boolean;
}

interface Props {
  toDo: ToDo;
  toggleToDo: ToggleToDo;
}

export const ToDoListItem: React.FC<Props> = ({ toDo, toggleToDo }) => {
  return (
    <li>
      <label
        style={{ textDecoration: toDo.complete ? 'line-through' : undefined }}
      >
        <input
          type="checkbox"
          checked={toDo.complete}
          onClick={() => {
            toggleToDo(toDo);
          }}
        /> {toDo.text}
      </label>
    </li>
  );
};
