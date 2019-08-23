import React from 'react'
import './ToDoListTemplate.css'

const ToDoListTemplate = ({form,children,categoryForm,categoryList}) => {
  return (
    <div>
    
    <main className = "todo-list-template">
    <div className="title">
      영진's 할 일
    </div>
    <section>
    <section className="left">
    <section>
     카테고리
    </section>
    {/* <button class="button">카테고리추가</button> */}
    {categoryForm}
    {categoryList}
   </section>
   
   <section className="right">
   <section className="form-wrapper">
     {form}
   </section>
   <section className = "todos-wrapper">
     {children}
   </section>
   </section>
   </section>
    </main>
    
    </div>
  )
}

export default ToDoListTemplate
