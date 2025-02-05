const IssueCard = props => {
  const {author, createdDate, title, voteBalance, _id} = props.issueDetails;
  const {handleIssueSelect, prettyDate} = props;

  return (
    <div className="issue-card clickable" id={_id} onClick={handleIssueSelect}>
      <h1 id={_id} >{title}</h1>
      <h4 id={_id} >By {author}</h4>
      <h4 id={_id} >Created on {prettyDate(createdDate)}</h4>
      <h4 id={_id} >Vote Balance: {voteBalance}</h4>
    </div>
  )

}
export default IssueCard;