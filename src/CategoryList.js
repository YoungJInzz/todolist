import React, { Component } from 'react';
import CategoryItem from './CategoryItem';

class CategoryList extends Component {
  render() {
    const { categories, handleCategoryRemove,handlesetCurrentCategory } = this.props;

    const categoryList = categories.map(
      ({categoryId, text}) => (
        <CategoryItem
        categoryId={categoryId}
          text={text}
          handleCategoryRemove={handleCategoryRemove}
          key={categoryId}
          handlesetCurrentCategory={handlesetCurrentCategory}
        />
      )
    );

    return (
      <div>
        {categoryList}    
      </div>
    );
  }
}


export default CategoryList;