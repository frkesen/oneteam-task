import React, { useState } from "react";
import { MdCheck } from "react-icons/md";

const FilterModal = ({
  filterList,
  setIsOpen,
  filterBy,
  setIssues,
  allIssues,
  setSelectedFilter,
  selectedFilter,
}) => {
  const [list, setlist] = useState(filterList);

  // console.log(filterList);
  const handleChange = (e) => {
    const filteredList = filterList.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setlist(filteredList);
  };
  const filterIssues = (name) => {
    if (selectedFilter === name) {
      setSelectedFilter("");
      setIssues(allIssues);
    } else {
      setSelectedFilter(name);
      if (filterBy === "author") {
        setIssues(allIssues.filter((issue) => issue.user.login === name));
      } else {
        setIssues(
          allIssues.filter((issue) =>
            issue.labels.some((label) => label.name === name)
          )
        );
      }
    }
  };
  return (
    <div className="fixed inset-0 w-full h-full">
      <div className="fixed inset-0 w-full h-full bg-black opacity-40" />
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg mx-auto px-4">
        <div className="bg-white rounded-md shadow-lg px-4 py-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-800">
              Filter by {filterBy}
            </h2>
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

          <input
            className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            placeholder="Filter"
            onChange={handleChange}
          />
          <ul className="h-96 overflow-auto">
            {list.map((item, i) => (
              <li
                key={i}
                className="list-none cursor-pointer border-t hover:bg-gray-100"
                onClick={() => filterIssues(item.name)}
              >
                <span className="inline-block w-4 mr-2 align-middle">
                  {selectedFilter === item.name && <MdCheck />}
                </span>
                {filterBy === "author" && (
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-5 h-5 rounded-full inline mr-2"
                  />
                )}
                {filterBy === "label" && (
                  <span
                    style={{ backgroundColor: `#${item.color}` }}
                    className="inline-block w-4 h-4 rounded-full mr-2 border align-middle"
                  ></span>
                )}
                <span>{item.name} </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
