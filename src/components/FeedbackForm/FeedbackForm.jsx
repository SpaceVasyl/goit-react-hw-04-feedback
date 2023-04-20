import React, { useState, useEffect} from "react";
import css from './FeedbackForm.module.css';
import {Statistics} from "components/Statistics/Statistics";
const Feedback = () => {
  const [Good, setGood] = useState(0);
  const [Neutral, setNeutral] = useState(0);
  const [Bad, setBad] = useState(0);
  const [Total, setTotal] = useState(0);
  const [Positive, setPositive] = useState(0);
 
  useEffect(() => { setTotal(Bad + Neutral + Good)}, [Bad, Neutral, Good]);
  useEffect(() => { setPositive(Math.round((Good / Total) * 100))}, [Good, Total]);
  
  return (
        <div>
          <h2>Please leave feedback</h2>
            <button type="button" className={css.buttonstat} onClick={()=>setGood(Good + 1)}>Good</button>
            <button type="button" className={css.buttonstat} onClick={()=>setNeutral(Neutral + 1)}>Neutral</button>
            <button type="button" className={css.buttonstat} onClick={()=>setBad(Bad + 1)}>Bad</button>
            {Total ? (<Statistics Good={Good} Bad={Bad} Neutral={Neutral} Total={Total} 
          Positive={Positive}/>):<p>There is no feedback</p>}
        </div>)
}

export default Feedback