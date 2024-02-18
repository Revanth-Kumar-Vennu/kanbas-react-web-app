import React, { useState } from "react";
import { modules } from "../../Database";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlus,
  FaAngleDown,
} from "react-icons/fa";
import { useParams } from "react-router";
import "./index.css";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <div className="flex-grow-1" style={{marginRight:55}}>
      <div className="d-flex justify-content-end mb-3 wd-module-buttons-group ">
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
            <FaCheckCircle className="text-success" /> Publish All
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>Publish All</li>
            <li>Unpublish All</li>
          </ul>
        </div>
        <button className="btn btn-danger me-2">
          <FaPlus className="fas fa-plus me-2" /> Module
        </button>
        <button className="btn btn-secondary me-2 wd-module-button">
          <FaEllipsisV className="float-end" />
        </button>
      </div>
      <hr/>
      <div style={{width:"100%"}}>
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item wd-module-item remove-padding"
            onClick={() => setSelectedModule(module)}
          >
            <div style={{ height: 50 }} className="align-items-center">
              <div style={{ padding: 10 }}>
                <FaEllipsisV className=" wd-dots ms-2" />
                <FaAngleDown className=" wd-dots me-2" />

                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlus className="wd-dots ms-2" />
                  <FaEllipsisV className=" wd-dots ms-2" />
                </span>
              </div>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item remove-padding">
                    <div style={{ height: 50 }} className="align-items-center">
                      <div style={{ padding: 10 }}>
                        <FaEllipsisV className=" wd-dots me-2" />
                        {lesson.name}
                        <span className="float-end">
                          <FaCheckCircle className="text-success" />
                          <FaEllipsisV className=" wd-dots ms-2" />
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}
export default ModuleList;
