// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  onDeleteItem = () => {
    const {uniqueNo, deleteFunction} = this.props
    deleteFunction(uniqueNo)
  }

  render() {
    const {item} = this.props
    const {title} = item
    return (
      <li className="list-item-container">
        <p className="todo-title">{title}</p>
        <button type="button" className="button" onClick={this.onDeleteItem}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
