import {Component} from 'react'
import './card-list.styles.css'
import CardContainer from '../card-container/card-container.component'

class ClassList extends Component {
	render() {
		const { monsters } = this.props

		return (
			<div className='card-list'>
				{monsters.map(monster => {
					return (
						<CardContainer key={monster.id} monster={monster}/>
					)
				})}
			</div>
		)
	}
}

export default ClassList
