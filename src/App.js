import React, { Component } from "react";

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      todoData : '',
      todoList : [],
      isEditing:true,
      editIndex:0
    }
  }

  handleAdd = () =>{
    const {todoList} = this.state
    const newData = {
      text:this.state.todoData
    }

    this.setState({
      todoList : [...todoList, newData],
      todoData : ''
    })
  }

  handleEdit = (index) =>{
    const {todoList} = this.state
    this.setState({
      isEditing:true,
      todoData:todoList[index].text,
      editIndex:index
    })
  }

  //updateList[{text:"ok123"}]


  handleUpdate = () =>{
    const {todoList} = this.state
    const updatedList = [...todoList]
    updatedList[this.state.editIndex] = {text:this.state.todoData}

    this.setState({
      todoList: updatedList,
      editIndex:null,
      isEditing:false,
      todoData:""
    })
  }


  handleChange = (event) =>{
    this.setState({
      todoData : event.target.value
    })
  }

  handleDelete = (index) =>{
    const {todoList} = this.state
    const newArray = [...todoList]
    newArray.splice(index,1)
    this.setState({todoList : newArray})
  }

  render() {
    const {todoData,todoList} = this.state
    return (
      <div className="flex justify-center items-center min-h-screen">
      <div className=" bg-blue-400 w-full max-w-lg p-10 shadow-xl rounded-lg">
        <h1 className="text-3xl text-center text-white ">TODO APP</h1><br></br>
        <input
          value={todoData}
          type="text"
          placeholder="Add your todo here "
          className="input input-bordered input-primary w-full max-w-xs"
          onChange={this.handleChange}
        />
        <button onClick={this.state.isEditing ? this.handleUpdate:this.handleAdd} className="btn btn-info text-white text-xl ml-2">{this.state.isEditing?"Update":"Add"}</button>

        {
          todoList.map((element,index)=><div>
          <span className="font-bold text-2xl mt-3 ml-5"><span>{index+1}</span>. {element.text} </span>
          <button onClick={()=>this.handleEdit(index)} className="btn btn-warning mx-2 mt-3 ml-44">Edit</button>
          <button onClick={() => this.handleDelete(index)} className="btn btn-error mt-3">Delete</button>
          </div>)
        }
        </div>
      </div>
    );
  }
}
export default App;
