import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ToDoList from './todolist'

class Container extends React.Component {
  render() {
    return (
      <div class="container">
        <ToDoList/>
      </div>
    )
  }
}

ReactDOM.render(
  <Container />,
  document.getElementById('root')
)