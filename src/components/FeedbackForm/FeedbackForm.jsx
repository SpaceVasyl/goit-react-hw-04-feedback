import React, { useState, useEffect} from "react";
import css from './FeedbackForm.module.css';
import {Statistics} from "components/Statistics/Statistics";
const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);
 
  useEffect(() => { setTotal(bad + neutral + good)}, [bad, neutral, good]);
  useEffect(() => { setPositive(Math.round((good / total) * 100))}, [good, total]);
  
  return (
        <div>
          <h2>Please leave feedback</h2>
            <button type="button" className={css.buttonstat} onClick={()=>setGood(good + 1)}>good</button>
            <button type="button" className={css.buttonstat} onClick={()=>setNeutral(neutral + 1)}>neutral</button>
            <button type="button" className={css.buttonstat} onClick={()=>setBad(bad + 1)}>bad</button>
            {total ? (<Statistics good={good} bad={bad} neutral={neutral} total={total} 
          positive={positive}/>):<p>There is no feedback</p>}
        </div>)
}

export default Feedback