import React from 'react'
import './index.css'


class ToDoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list_arr: []
    }
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    
  }

  addItem(e) {
    e.preventDefault()
    this.setState( 
      function (state) {
        if (this.input.value) //adds value to array if there is some value in the textbox
        {
          state.list_arr.unshift(this.input.value)
          this.input.value = ""
        }
        const list_arr = state.list_arr
        return { list_arr: list_arr }
      }
    )
  }

  // removes an item when clicked on 'x'
  removeItem(i) {
    this.setState(
      (state) => {
        state.list_arr.splice(i, 1)
        const list_arr = state.list_arr
        return { list_arr: list_arr }
      }
    )
  }

  render() {  
    return (
      <div class="block">
        <div class="info">
          Fork me on <a href="https://github.com/darkninja3/todolist">Github</a>
        </div>

        <form class="form" onSubmit={this.addItem}>
          <input type="text" ref={(input) => { this.input = input }}
                  placeholder="Add Item" />
          <button type="submit">Add</button>
        </form>
        
        <div class="list">
          {this.state.list_arr.map(
            (a, i, arr) =>
              <div key={i} class="item">
                {a}
              
                <span class="close"
                      onClick={(e) => this.removeItem(i)}>
                  &times;
                </span>
              </div>
          )}
        </div>

      </div>
    )
  }
}


export default ToDoList;  