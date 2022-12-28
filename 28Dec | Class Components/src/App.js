import './App.css';
import { Component } from 'react'
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component'

class App extends Component { // The same as using [ function App() {} ]
	constructor(props) {
		super(props) 
		this.state = {
			monsters: [],
			searchField: ''
		}
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(user => this.setState(() => {
				return {monsters: user}
			}, () => {
				console.log(this.state)
			}
			))
	}
	onSearchChange = (event) => {
		const searchField = event.target.value.toLocaleLowerCase()
		this.setState(() => {
			return { searchField }
		})
	}
	render() { // Shows what we are exactly doing
		const {monsters, searchField} = this.state
		const {onSearchChange} = this
		const filteredMonsters = monsters.filter(monster => {
			return monster.name.toLocaleLowerCase().includes(searchField)
		});
		return (
			<div className="App">
				<h1 className='app-title'>Monster Rolodex</h1>

				{/* {filteredMonsters.map(monster => {
						return (<div key={monster.id}>
									<h1>{monster.name}</h1>
								  </div>)
				})} */}
				<SearchBox onSearchChange = {onSearchChange} placeholder = 'Search monsters' 
					className = 'monster-search-box'/>
				<CardList monsters = {filteredMonsters} />
			</div>
		)
	}
}

export default App;
