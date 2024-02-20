import ModuleList from "../Modules/list";
import Status from "../Status";

function Home({ course_id }: { course_id: string }) {
  return (
    <div className="d-flex">
      <ModuleList />
      <Status course_id={course_id}/>
    </div>
  );
}
export default Home;