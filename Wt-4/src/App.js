import "./App.css";
import TodoArr from "./Store";
import TodoApp from "./components/TodoApp";

function App() {
	return (
		<TodoArr>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					width: "100vw",
					height: "100vh",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<TodoApp />
			</div>
		</TodoArr>
	);
}

export default App;
