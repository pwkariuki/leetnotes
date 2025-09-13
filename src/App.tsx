import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex justify-center items-center h-[400px] w-[400px] text-2xl ">
      <Button onClick={() => alert("Hello World! This is LeetNotes!")}>
        Click me
      </Button>
    </div>
  );
}

export default App;
