import React from 'react';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <h1>{props.username}</h1>
    </div>
  )
}

export default userOutput;