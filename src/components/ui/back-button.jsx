import React from 'react'

const BackButton = props => {
  return (
    <span className="button back-btn" onClick={props.click}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>
      <span>Back</span>
    </span>
  )
}

export default BackButton
