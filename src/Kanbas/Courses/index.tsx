import { courses } from "../../Kanbas/Database";
import { HiMiniBars3 } from "react-icons/hi2";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import CourseNavigation from "./Navigation";
import CourseHeader from "./CourseHeader";
import Module from "./Modules";

function Courses() {
  const { courseId } = useParams();
  const {pathname} = useLocation();
  console.log(pathname);
  const parts = pathname.split("/");

// Get the last part of the URL
const lastPart = parts[parts.length - 1];
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
    <CourseHeader course_id={course?._id || ''} location={lastPart} />
      <CourseNavigation course_id={course?._id || ''} />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<h1>Home</h1>} />
            <Route path="Modules" element={<Module />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;