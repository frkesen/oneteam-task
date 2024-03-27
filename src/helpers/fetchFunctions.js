export const getIssues = async () => {
  const URL = `https://api.github.com/repos/facebook/react/issues`;

  const res = await fetch(URL);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};

export const getLabels = async (page) => {
  const URL = `https://api.github.com/repos/facebook/react/labels?page=${page}`;

  const res = await fetch(URL);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};
