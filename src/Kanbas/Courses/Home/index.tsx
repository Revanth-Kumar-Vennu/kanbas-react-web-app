import ModuleList from "../Modules/list";
import Status from "../Status";

function Home({ course_id }: { course_id: string }) {
  return (
    <>
      <ModuleList />
      <Status course_id={course_id}/>
    </>
  );
}
export default Home;