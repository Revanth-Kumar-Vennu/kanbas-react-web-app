import { Link, useLocation } from "react-router-dom";
import { courses } from "../../Database";
import "./index.css"; // feel free to use the CSS from previous assignments
function CourseNavigation({ course_id }: { course_id: string }) {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Assignments",
    "Grades",
    "People",
    "Panopto",
    "Zoom",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Progress",
    "Settings",
  ];
  const { pathname } = useLocation();
  const course = courses.find((course) => course._id === course_id);

  return (
    <>

    <span className="wd-semester">{course?._id} {course?.semester} Semes.....</span>
    <ul className="wd-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
    </>
  );
}
export default CourseNavigation;
