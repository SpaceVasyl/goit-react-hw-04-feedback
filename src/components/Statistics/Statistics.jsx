import React from "react";
export const Statistics = ({Good, Neutral, Bad, Total, Positive}) => {
        
  return (
    <>
      <h2>Statistics</h2>
      <p>Good: {Good}</p>
      <p>Neutral: {Neutral}</p>
      <p>Bad: {Bad}</p>
      <p>Total: {Total}</p>
      <p>Positive feedback: {Positive} %</p>
    </>
  )
}
