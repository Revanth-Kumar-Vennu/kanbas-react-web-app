import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import "../../index.css";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="flex-grow-1" style={{ marginRight: 55 }}>
      <div className="row">
        <div className="col-12">
          <button type="button" className="btn wd-module-button float-right">
            <FaEllipsisV className="fas fa-ellipsis-v black-color" />
          </button>
          <button type="button" className="wd-publish-button btn btn-light">
            <FaCheckCircle className="fas fa-check-circle button-color" />
            <span className="button-color">
              <b>Published </b>
            </span>
          </button>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <label>Assignment Name</label>
          <input
            id="assignment-name"
            type="text"
            value={assignment?.title}
            className="form-control"
          />
        </div>
      </div>
      <hr />
      <div>
        <button onClick={handleSave} className="btn  btn-danger ms-2 float-end">
          Save
        </button>
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn  btn-light float-end"
        >
          Cancel
        </Link>
      </div>
     
    </div>
  );
}
export default AssignmentEditor;
