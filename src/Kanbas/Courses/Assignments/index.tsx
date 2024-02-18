import React from "react";
import {
  FaCaretDown,
  FaCheckCircle,
  FaEllipsisV,
  FaPlus,
} from "react-icons/fa";
import snip from "../../../images/snip.png";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="flex-grow-1" style={{marginRight:55}}>
      <div className="d-flex  mb-3 wd-module-buttons-group">
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Search for Assignment"
            aria-label="Search"
          />
        </div>
        <div className="ms-auto">
          <button className="btn btn-secondary me-2 wd-module-button">
            <FaPlus className="fas fa-plus me-2" /> Group
          </button>

          <button className="btn btn-danger me-2 wd-add-module">
            <FaPlus className="fas fa-plus me-2" /> Assignment
          </button>
          <button className="btn btn-secondary me-2 wd-module-button">
            <FaEllipsisV className="fas fa-ellipsis-v" />
          </button>
        </div>
      </div>
      <hr className="wd-todo-hr" />

      <ul className="list-group wd-modules">
        <li className="list-group-item list-group-item-secondary wd-assignment-header" style={{padding:15}}>
          <FaEllipsisV className="fas fa-ellipsis-v wd-dots" />
          <FaCaretDown className="fa fa-caret-down me-2" />
          <span style={{paddingTop:20, fontSize:20}}>ASSIGNMENTS</span>
          <div className="float-end">
            <div className="btn-group">
              <label className="btn wd-weightage">40% of Total</label> &nbsp;&nbsp;

              <ul className="dropdown-menu"></ul>
            </div>

            <FaPlus className="fas fa-plus me-4 wd-dots" />
            <FaEllipsisV className="fas fa-ellipsis-v wd-dots" />
          </div>
        </li>

        {assignmentList.map((assignment) => (
          <li className="list-group-item wd-green-border wd-assignment-list align-items-center  d-flex">
            <div className="d-flex">
              <FaEllipsisV className="fas fa-ellipsis-v wd-dots" />
            </div>
            <div>
              <img src={snip} className="wd-assignment-img" alt="" />
            </div>
            <div className="wd-assignment-div">
              <Link
                className="wd-assignment-name"
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              >
                {assignment.title}
              </Link>

              <br />
              <p className="wd-assignment-text">
                {assignment.description} | <br />
               <span className="wd-module-link">Multiple Modules</span>  | <b>Due</b> {assignment.dueDate} | 100 pts
              </p>
            </div>
            <div className="ms-auto">
              <FaCheckCircle className="fas fa-check-circle text-success wd-check-symbol  me-4" />
              <FaEllipsisV className="fas fa-ellipsis-v  wd-dots" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Assignments;
