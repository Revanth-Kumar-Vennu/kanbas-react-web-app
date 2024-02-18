import React, { useState } from "react";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus, FaArrowLeft, FaExclamationTriangle, FaAngleRight, FaAngleDoubleDown, FaAngleDown } from "react-icons/fa";
import { useParams } from "react-router";
import "./index.css";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
     
      <div className="d-flex justify-content-end mb-3 wd-module-buttons-group">
      <button className="btn btn-secondary me-2 wd-module-button">
        Collapse All
      </button>
      <button className="btn btn-secondary me-2 wd-module-button">
        View Progress
      </button>
      <div className="dropdown me-1">
        <button
          className="btn btn-secondary dropdown-toggle wd-module-button"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaCheckCircle className="text-success"/> Publish All
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
                <a className="dropdown-item" href="#">
                Publish All
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                Unpublish All
                </a>
            </li>
        </ul>
      </div>
      <button className="btn btn-danger me-2">
        <FaPlus className="fas fa-plus me-2" /> Module
      </button>
      <button className="btn btn-secondary me-2 wd-module-button">
        <FaEllipsisV className="float-end"/>
      </button>
    </div>
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item module-title"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV  className=" wd-dots ms-2"/>
              <FaAngleDown className=" wd-dots me-2"/>
             
              
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlus className="wd-dots ms-2" />
                <FaEllipsisV className=" wd-dots ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                   
                    <FaEllipsisV className=" wd-dots me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className=" wd-dots ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;