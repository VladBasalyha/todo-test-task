import {
	Checkbox,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@mui/material";
import { useState } from "react";
import { FormTodo } from "./FormTodo";
import { ModalTodo } from "./ModalTodo";
export const ListOfTodo = () => {
	const [todos, setTodo] = useState([
		{
			id: 1,
			description: "fdsafdsafdsafdsafdas",
			title: "gfsdafdasfdsaf",
			status: false,
		},
		{
			id: 2,
			description: "chel",
			title: "alo",
			status: false,
		},
	]);

	const [modalDescription, setModalDescription] = useState("");

	const [modalTitle, setModalTitle] = useState("");

	const [isModalOpen, setModalStatus] = useState(false);

	const addingTodo = (newTodo) =>
		setTodo((prevstate) => [...prevstate, newTodo]);

	const keys = Object.keys(...todos);

	const changeModalStatus = (e) => {
		const { type } = e.target;

		todos.find((todo) => {
			if (todo.id == e.currentTarget.dataset.id) {
				setModalDescription(todo.description);
				setModalTitle(todo.title);
			}
		});

		if (type === "checkbox") {
			return;
		}
		setModalStatus((prev) => !prev);
	};

	return (
		<>
			{isModalOpen && (
				<ModalTodo onModalClose={changeModalStatus}>
					<p>{modalDescription}</p>
					<p>{modalTitle}</p>
				</ModalTodo>
			)}
			<FormTodo addingTodo={addingTodo}></FormTodo>
			<Table>
				<TableHead>
					<TableRow>
						{keys.map((key) => (
							<TableCell key={Math.random()}>{key}</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{todos.map((todo) => {
						return (
							<TableRow data-id={`${todo.id}`} onClick={changeModalStatus}>
								<TableCell>{todo.id}</TableCell>
								<TableCell>{todo.description}</TableCell>
								<TableCell>{todo.title}</TableCell>
								<TableCell>
									<Checkbox checked={todo.status}></Checkbox>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</>
	);
};
