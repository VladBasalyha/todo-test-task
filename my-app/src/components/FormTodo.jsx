import { Button, TextField } from "@mui/material";
import { useState } from "react";

export const FormTodo = ({ addingTodo }) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const onHandleChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case "title":
				setTitle(value);
				break;
			case "description":
				setDescription(value);
				break;
			default:
				return;
		}
	};

	const onSubmitForm = (e) => {
		e.preventDefault();
		const newTodo = {
			id: Math.random(),
			title: title,
			description: description,
		};
		addingTodo(newTodo);
	};

	return (
		<form onSubmit={onSubmitForm}>
			<TextField
				onChange={onHandleChange}
				value={title}
				name="title"
				placeholder="Enter title"
				label={"title"}
			></TextField>
			<TextField
				onChange={onHandleChange}
				value={description}
				name="description"
				placeholder="Description"
				label={"description"}
			></TextField>
			<Button variant="contained" type="submit">
				Add task
			</Button>
		</form>
	);
};
