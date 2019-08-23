import React from 'react'
import './categoryForm.css'

const CategoryForm = ({categoryInput, handleCategoryChange,handleCreateCategory,handleCategoryKeyPress}) => {
    return (
        <div className ="form">
        <input value={categoryInput} onChange={handleCategoryChange} onKeyPress={handleCategoryKeyPress} />
        <div className = "create-button" onClick={handleCreateCategory}>
            추가
        </div>
        </div>
    )
}

export default CategoryForm