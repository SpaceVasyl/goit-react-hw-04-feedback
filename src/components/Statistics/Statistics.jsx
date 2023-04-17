
export const Statistics = ({good, neutral, bad, totalFunc, positive}) => {
        // return <>
        // <h2>Statistics</h2>
        // {this.countTotalFeedback() > 0 ? <p>Good: {this.state.good}</p>
        // <p>Neutral: {this.state.neutral}</p><p>Bad: {this.state.bad}</p>
        // <p>Total: {this.countTotalFeedback()}</p>
        // <p>Positive feedback: {Math.round(this.state.good / (this.state.bad + this.state.neutral + this.state.good) * 100)} %</p>
        //  : <p>No feedback given</p>
        // }</>
  return (
    <>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFunc}</p>
      <p>Positive feedback: {positive}</p>
    </>
  )
}
