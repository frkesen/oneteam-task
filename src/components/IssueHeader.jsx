import React, { useState } from "react";
import { GoIssueClosed, GoIssueOpened } from "react-icons/go";
import { MdArrowDropDown } from "react-icons/md";
import FilterModal from "./FilterModal";
import SortModal from "./SortModal";

const menuList = [
  "author",
  "label",
  "projects",
  "milestones",
  "asignee",
  "sort",
];

const IssueHeader = ({ authors, labels, setIssues, allIssues }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterBy, setFilterBy] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  // console.log(isOpen);
  return (
    <>
      <div className="p-5 border-gray-100 bg-gray-50 rounded-t-md">
        <div className="justify-between sm:flex">
          <div className="flex items-center gap-2">
            <GoIssueOpened className="text-gray-500" />
            <span>1181 Open</span>
            <GoIssueClosed className="text-purple-600" />
            <span>11580 Closed</span>
          </div>
          <div className="ml-2">
            <ul className="flex gap-2">
              {menuList.map((item) => (
                <li
                  key={item}
                  className="flex items-center text-gray-500 hover:text-black cursor-pointer"
                  onClick={() => {
                    setFilterBy(item);
                    setIsOpen(true);
                  }}
                >
                  <span className="capitalize">{item}</span>

                  <MdArrowDropDown />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {isOpen && (filterBy === "author" || filterBy === "label") && (
        <FilterModal
          filterList={filterBy === "author" ? authors : labels}
          setIsOpen={setIsOpen}
          filterBy={filterBy}
          setIssues={setIssues}
          allIssues={allIssues}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      )}
      {isOpen && filterBy === "sort" && (
        <SortModal
          setIsOpen={setIsOpen}
          filterBy={filterBy}
          setIssues={setIssues}
          allIssues={allIssues}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      )}
    </>
  );
};

export default IssueHeader;
