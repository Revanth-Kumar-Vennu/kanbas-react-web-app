import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import QuickNav from "./QuickNav";
import KanbasQuickNav from "./KanbasQuickNav";
import { useState } from "react";
import { courses as current_courses } from "./Database";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const { pathname } = useLocation();
  const [courses, setCourses] = useState(current_courses);

  const dummyCourse = {
    _id: "0",
    name: "React",
    number: "CS5600",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    theme: "light-grey",
    semester: "Fall 2023",
  };
  const [course, setCourse] = useState(dummyCourse);
  const addNewCourse = () => {

    console.log("Inside addNewCourse")
    console.log(courses);
    
    const newCourse = { ...course, _id: new Date().getTime().toString() };
    setCourses([...courses, { ...course, ...newCourse }]);
    console.log(courses);
    console.log(courses.length);
  };
  const deleteCourse = (courseId: string) => {
    console.log(courseId);
    setCourses(
      courses.filter((course: { _id: string }) => course._id !== courseId)
    );
  };
  const updateCourse = () => {
    setCourse(dummyCourse);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <>
        <Provider store={store}>

      {pathname.includes("KanbasQuickNav") ? <KanbasQuickNav /> : <QuickNav />}
      <div
        className="d-flex"
        id="wd-main-container"
        style={{ display: "block" }}
      >
        <div
          className="d-none d-md-block "
          style={{ position: "fixed", height: "100%" }}
        >
          <KanbasNavigation />
        </div>
        <div style={{ flexGrow: 1 }} className="wd-main-div">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route path="Courses/:courseId/*" element={ <Courses courses={courses} />} />

          </Routes>
        </div>
      </div>
      </Provider>
    </>
  );
}
export default Kanbas;
