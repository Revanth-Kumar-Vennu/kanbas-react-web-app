import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import QuickNav from "./QuickNav";
import KanbasQuickNav from "./KanbasQuickNav";
function Kanbas() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname.includes("KanbasQuickNav") ? <KanbasQuickNav /> : <QuickNav />}
      <div
        className="d-flex"
        id="wd-main-container"
        style={{ display: "block" }}
      >
        <div className="d-none d-md-block ">
          <KanbasNavigation />
        </div>
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default Kanbas;
