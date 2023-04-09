import { useContext } from "react";
import { Context } from "../Store";
import "./styles/TodoItem.css";

const TodoItem = ({ todo }) => {
	const { setDefaults, del } = useContext(Context);
	return (
		<div className="TodoItem">
			<div className="firstHalf">
				<input type="checkbox" />
				<p>{todo.todo}</p>
			</div>
			<div className="secondHalf">
				<button className="btn" onClick={() => setDefaults(todo)}>
					📨
				</button>
				<button className="btn" onClick={() => del(todo.id)}>
					🚮
				</button>
			</div>
		</div>
	);
};

export default TodoItem;
