import NewProject from "./component/NewProject";
import ProjectSliderBar from "./component/ProjectSliderBar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSliderBar />
      <NewProject />
    </main>
  );
}

export default App;
