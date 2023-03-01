import { Button, TextField } from "@mui/material";

export const FormTodo = () => {
	return (
		<form>
			<TextField placeholder="Enter title" label={"title"}></TextField>
			<TextField placeholder="Description" label={"description"}></TextField>
			<Button variant="contained" type="submit">
				Add task
			</Button>
		</form>
	);
};
