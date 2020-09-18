import React, { useState } from 'react';

interface Props {
  addToDo: AddToDo;
}

export const AddToDoForm: React.FC<Props> = ({ addToDo }) => {
  const [text, setText] = useState('');

  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={e => {
          e.preventDefault();
          addToDo(text);
          setText('');
        }}
      >
        Add ToDo
      </button>
    </form>
  );
};
