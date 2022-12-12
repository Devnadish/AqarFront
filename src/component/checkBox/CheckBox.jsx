import React from 'react'
import "./checkbox.css"



function CheckBox() {
  return (
    <div className="checkbox-container">
        <input type="checkbox" id="cb4" />
        <label htmlFor="cb4">Checkbox 4</label>
      </div>
  )
}

export default CheckBox