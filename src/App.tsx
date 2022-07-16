import { EditorArea } from "./components/EditorArea";
import { LeftBar } from "./components/LeftBar";

function App() {
  return (
    <div className="font-poppins flex">
      <LeftBar />
      <EditorArea />
    </div>
  );
}

export default App;
