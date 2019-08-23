import React, { Component } from 'react';
import TodoListTemplate from './ToDoListTemplate';
import './App.css'
import Form from './Form'
import CategoryForm from './categoryForm'
import TodoItemList from './TodoItemList';
import CategoryList from './CategoryList'

class App extends Component {
  id = 6 // 이미 0,1,2 가 존재하므로 3으로 설정
  categoryId=3
  state = {
    categoryInput: '',
    displayCategory:'',
    categories:[
      {categoryId:0,text:'오늘할거'},
      {categoryId:1,text:'내일할거'},
      {categoryId:2,text:'다음주'}
    ],
    input: '',
    todos: [
      { id: 0, text: ' 밥먹기', checked:true,category:0 },  ///키값 같게 줘서 오류남
      { id: 1, text: ' todolist만들기', checked:true,category:0 },
      { id: 2, text: 'toy못푼거 풀기 ', checked: false,category:1},
      {id: 3, text:'블로깅하기', chekced: false,category:1},
      { id: 4, text: ' 잠자기', checked: false,category:0 },
      { id:5, text: '만화보기', checked:false,category:0},
      { id:6, text: '운동하기', checked:false,category:1},
      { id:7, text: 'server sprint', checked:false,category:2}

    ]
  }

  handlesetCurrentCategory=(categoryId) =>{
    
    this.setState({
      displayCategory: categoryId
    })
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }
  handleCategoryChange = (e) => {
    this.setState({
      categoryInput:e.target.value
    })
  }
  handleCreate = () => {
    const { input, todos,displayCategory } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({                     // 왜 input을 비웠는데 추가될 수 있나?
        id: this.id++,
        text: input,
        checked: false,
        category:displayCategory

      })
    });
  }

  handleCreateCategory=()=>{
    const {categoryInput,categories} = this.state;
    this.setState({
     categoryInput:'',
     categories: categories.concat({
       categoryId:this.categoryId++,
       text: categoryInput
     })
    })
  }

  handleKeyPress = (e) => {
    console.log("enter")
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }
  handleCategoryKeyPress=(e) =>{
    if(e.key === 'Enter'){
      this.handleCreateCategory()
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove =(id) =>{
    const{todos} =this.state;
    this.setState({
      todos:todos.filter(todo=>todo.id !== id)
    });
  }

  handleCategoryRemove=(categoryId) =>{
    const{categories,todos}=this.state;
    this.setState({
      todos:todos.filter(todo=>todo.categoryId !==categoryId),    // todos에서도 category같은거 지운다
      categories:categories.filter(categoroy=>categoroy.categoryId !==categoryId) ///this.categoryId라고 해서 오류남
    }
    )
  }

  render() {
    const { input, todos ,displayCategory,categoryInput,categories} = this.state;
    const {
      handleChange,
      handleCategoryChange,
      handleCreate,
      handleCreateCategory,
      handleKeyPress,
      handleCategoryKeyPress,
      handleToggle,
      handleRemove,
      handleCategoryRemove,
      handlesetCurrentCategory
    } = this;

    return (
      <TodoListTemplate form={(
        <Form 
          value={input}
          onChange={handleChange}
          onCreate={handleCreate}
          onKeyPress={handleKeyPress}
        />
      )} categoryForm={(
        <CategoryForm
        categoryInput={categoryInput}
        handleCategoryChange={handleCategoryChange}
        handleCreateCategory={handleCreateCategory}
        handleCategoryKeyPress={handleCategoryKeyPress}
        />
      )}
      categoryList={(
        <CategoryList categories={categories} handleCategoryRemove={handleCategoryRemove} handlesetCurrentCategory={handlesetCurrentCategory}/>
      )}
      >
        <TodoItemList displayCategory={displayCategory} todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;