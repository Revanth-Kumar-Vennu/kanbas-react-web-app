import { Link } from "react-router-dom";
import { courses } from "../../Kanbas/Database";
import { FaBars, FaGlasses } from "react-icons/fa";
import "./index.css";
function CourseHeader({ course_id, location}: { course_id: any, location: any}) {

    const course= courses.find((course) => course._id === course_id);
  return (
    <div  className=" d-none d-md-block wd-course-header ">
                                     <div className=" row">
                    <div className="col-10">
                        <nav aria-label="breadcrumb" className="d-flex justify-content-between  old-navbar">
                            <FaBars className="main-theme wd-bars-icon"/>
                            <ol className="breadcrumb flex-grow-1 wd-current-location">
                                <li className="breadcrumb-item"><Link to="#" className="text-danger"
                                        style={{ textDecoration: "none" }}>{course?.name} {course?.semester}</Link></li>
                                <li className="breadcrumb-item active" aria-current="page"><strong>{location}</strong></li>
                            </ol>
                        </nav>
                    </div>
                    <button className="btn  wd-module-button col-2"><FaGlasses className='fas fa-glasses'/>   Student View</button>
                </div>
        <hr className="wd-todo-hr" />
      </div>
  );
}

export default CourseHeader;