interface ToDo {
  text: string;
  complete: boolean;
}

type ToggleToDo = (selectedToDo: ToDo) => void;

type AddToDo = (text: string) => void;
