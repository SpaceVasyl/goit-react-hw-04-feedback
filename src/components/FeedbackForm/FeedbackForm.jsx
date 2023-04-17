import React, { useState} from "react";
import css from './FeedbackForm.module.css';
import {Statistics} from "components/Statistics/Statistics";
const Feedback = () => {
  const [Good, setGood] = useState(0);
  const [Neutral, setNeutral] = useState(0);
  const [Bad, setBad] = useState(0);
  const [Total, setTotal] = useState(0);
  const [Positive, setPositive] = useState(0);
  const newGood = ()=>{
    setGood(Good + 1)
    countTotalFeedback();
    countPositiveFeedback();
  };
  const newNeutral = ()=>{
    setNeutral(Neutral + 1);
    countTotalFeedback();
    countPositiveFeedback();
  }
  const newBad = ()=>{
    setBad(Bad + 1);
    countTotalFeedback();
    countPositiveFeedback();
  }
  const countTotalFeedback = ()=>setTotal(Bad + Neutral + Good)
  const countPositiveFeedback = () => setPositive(Math.round((Good / Total) * 100));
  return (
        <div>
          <h2>Please leave feedback</h2>
            <button type="button" className={css.buttonstat} onClick={newGood}>Good</button>
            <button type="button" className={css.buttonstat} onClick={newNeutral}>Neutral</button>
            <button type="button" className={css.buttonstat} onClick={newBad}>Bad</button>
            {Total ? (<Statistics Good={Good} Bad={Bad} Neutral={Neutral} Total={Total} 
          Positive={Positive}/>):<p>There is no feedback</p>}
        </div>)
}

export default Feedback