import React from 'react'

export default function DirectionItem(props) {
  const step = props?.step;
  const index = props?.index;

  function handleClickCheckBox(checkbox) {
    checkbox.target.classList.toggle('step-checked')
  }

  return (
    <div className="col-sm-12 my-3">
    <div className="row mb-3">
      <div className="col-sm-12 d-flex">
        <span
          className="material-icons step"
          onClick={handleClickCheckBox}>check_circle</span>
        <strong>Step {index + 1}</strong>
      </div>
    </div>
    <span>{step}</span>
  </div>
  )
}
