import classes from "./TodoItem.module.css";

const TodosItem: React.FC<{ text: string; handleRemove: (event: React.MouseEvent) => void }> = (
  props,
) => {
  return (
    <li onClick={props.handleRemove} className={classes.item}>
      {props.text}
    </li>
  );
};

export default TodosItem;
