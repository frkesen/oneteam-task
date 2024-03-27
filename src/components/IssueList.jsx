"use client";
import IssueItem from "./IssueItem";
import IssueHeader from "./IssueHeader";
import { useState } from "react";

const IssueList = ({ issues: allIssues, authors, labels }) => {
  const [issues, setIssues] = useState(allIssues);
  console.log(issues);
  return (
    <div className="w-3/4 m-auto">
      <IssueHeader authors={authors} labels={labels} setIssues={setIssues} />
      {issues.map((issue) => (
        <IssueItem
          key={issue.id}
          title={issue.title}
          reporter={issue.user.login}
          number={issue.number}
          labels={issue.labels}
          state={issue.state}
          url={issue.html_url}
          asignee={issue.assignee}
          comments={issue.comments}
          created={issue.created_at}
        />
      ))}
    </div>
  );
};

export default IssueList;
