import IssueList from "@/components/IssueList";
import { getIssues, getLabels } from "@/helpers/fetchFunctions";

export default async function Home() {
  const issues = await getIssues();
  const authors = issues.map((issue) => ({
    name: issue.user.login,
    avatar: issue.user.avatar_url,
  }));

  const [labels1, labels2, labels3] = await Promise.all([
    getLabels(1),
    getLabels(2),
    getLabels(3),
  ]);
  const labels = [...labels1, ...labels2, ...labels3];
  console.log(labels);
  return (
    <main className="container m-4">
      <IssueList issues={issues} authors={authors} labels={labels} />
    </main>
  );
}
