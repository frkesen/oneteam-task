import moment from "moment";
import React from "react";
import { GoComment, GoIssueClosed, GoIssueOpened } from "react-icons/go";

const IssueItem = (props) => {
  const {
    title,
    reporter,
    number,
    labels,
    state,
    url,
    asignee,
    comments,
    created,
  } = props;
  return (
    <a href={url} target="_blank">
      <div className="p-5 bg-white border border-gray-100 duration-150   hover:bg-gray-50">
        <div className="justify-between sm:flex">
          <div>
            {state === "open" ? (
              <GoIssueOpened className="text-green-500" />
            ) : (
              <GoIssueClosed className="text-purple-600" />
            )}
          </div>
          <div className="flex-1 ml-2">
            <div>
              <span className="font-medium">{title}</span>
              {labels.map((label) => (
                <span
                  style={{ backgroundColor: `#${label.color}` }}
                  className="px-2 rounded-lg ml-1"
                  key={label.id}
                >
                  {label.name}
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-500 mt-2 pr-2">
              #{number} opened {moment(created).fromNow()} by {reporter}
            </span>
          </div>
          <div className="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-2">
            {comments ? (
              <div className="flex items-center">
                <GoComment />
                <span className="text-xs ml-1"> {comments}</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </a>
  );
};

export default IssueItem;
