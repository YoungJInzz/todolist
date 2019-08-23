import React, { Component } from 'react';
// import './CategoryItem.css';

class CategoryItem extends Component {
  render() {
    const { text, categoryId, handleCategoryRemove,handlesetCurrentCategory } = this.props;

    return (
      <div className='todo-item'  onClick={() => handlesetCurrentCategory(categoryId)}>
        <div className="remove" onClick={(e) => {
          e.stopPropagation(); // onToggle 이 실행되지 않도록 함,
          handleCategoryRemove(categoryId)
        console.log("클릭됨")}
        }>&times;</div>            
        <div className='todo-text'>   
          <div>{text}</div>
        </div>
      </div>
    );
  }
}
export default CategoryItem;