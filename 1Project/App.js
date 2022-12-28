import React from 'react' // Импортируем данные с фреймворка 
import TodoList from './Todo/TodoList' // Импортируем функцию TodoList из файла TodoList.js

function App() { 
	const [todos, setTodos] = React.useState([
		{id: 1, completed: false, title: 'Купить хлеб'},
		{id: 2, completed: false, title: 'Купить масло'},
		{id: 3, completed: false, title: 'Купить сок'}
	])

	function todoToggle(id) {
		setTodos(todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo
		}))
	}

	return ( // JSX
		<div className="wrapper">
			<h1>React tutorial</h1>
			<TodoList todos={todos} onToggle={todoToggle}/>
		</div>
	);
}

export default App; // Exports the file to Web
