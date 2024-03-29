import React from "react";
import { MdCheck } from "react-icons/md";

const sortList = [
  "newest",
  "oldest",
  "most commented",
  "least commented",
  "recently updated",
  "least recently updated",
];

const SortModal = ({
  setIsOpen,
  setIssues,
  allIssues,
  setSelectedFilter,
  selectedFilter,
}) => {
  const sortIssues = (name) => {
    if (selectedFilter === name) {
      setSelectedFilter("");
      setIssues(allIssues);
    } else {
      setSelectedFilter(name);
      const issues = [...allIssues];
      switch (name) {
        case "newest":
          setIssues(
            issues.sort(
              (a, b) => new Date(b.created_at) - new Date(a.created_at)
            )
          );
          break;
        case "oldest":
          setIssues(
            issues.sort(
              (a, b) => new Date(a.created_at) - new Date(b.created_at)
            )
          );
          break;
        case "most commented":
          setIssues(issues.sort((a, b) => b.comments - a.comments));
          break;
        case "least commented":
          setIssues(issues.sort((a, b) => a.comments - b.comments));
          break;
        case "recently updated":
          setIssues(
            issues.sort(
              (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
            )
          );
          break;
        case "least recently updated":
          setIssues(
            issues.sort(
              (a, b) => new Date(a.updated_at) - new Date(b.updated_at)
            )
          );
          break;

        default:
          break;
      }
    }
  };
  //   console.log(selectedFilter);
  return (
    <div className="fixed inset-0 w-full h-full">
      <div className="fixed inset-0 w-full h-full bg-black opacity-40" />
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg mx-auto px-4">
        <div className="bg-white rounded-md shadow-lg px-4 py-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-800">Sort by</h2>
            <button
              className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mx-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <ul className="h-48 overflow-auto">
            {sortList.map((item, i) => (
              <li
                key={i}
                className="list-none cursor-pointer border-t hover:bg-gray-100"
                onClick={() => sortIssues(item)}
              >
                <span className="inline-block w-4 mr-2 align-middle">
                  {selectedFilter === item && <MdCheck />}
                </span>

                <span className="capitalize">{item} </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SortModal;
