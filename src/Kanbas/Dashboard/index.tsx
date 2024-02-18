import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";

import "./index.css";
import { FaEdit,FaEllipsisV } from "react-icons/fa";
function Dashboard() {
  return (

    <div className="p-4">
    <h1>Dashboard</h1>
    <hr />
    <h2>Published Courses (7)</h2>
    <hr />
    <div className="row">
      <div className="row row-cols-1 row-cols-md-4 g-4">

      {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300, margin:12 }}>
              <div className="wd-card">
            <div className={`wd-upper-half wd-bg-${course.theme}`}>
                <FaEllipsisV className="wd-dots" />
            </div>
                <div className="wd-lower-half">
                  <Link className="wd-link" to={`/Kanbas/Courses/${course._id}/Home`}>
                    
                <div className={`wd-fontcolor-${course.theme}`}>
                {course.name} 
                </div>
                <div className="wd-course-name wd-fontcolor-light-grey">
                {course.name}.{course.number}
                </div>
                <div className="wd-course-term wd-fontcolor-light-grey">
                  202410_1 Spring 2024 Semester Full Term
                </div>
                <FaEdit className="fs-5 wd-edit"/>
                </Link>
                </div>
              </div>
            </div>
          ))}



      
 
      </div>
    </div>
  </div>

  


   
  );
}
export default Dashboard;