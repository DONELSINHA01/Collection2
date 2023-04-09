import React from "react";
import Header from "./Header";
import TodosLogic from "./TodosLogic";

const TodoApp = () => {
	return (
		<div
			style={{
				minHeight: "400px",
				width: "380px",
				background: "#fff",
				boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.8)",
				borderRadius: "10px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
			<Header />
			<TodosLogic />
		</div>
	);
};

export default TodoApp;
