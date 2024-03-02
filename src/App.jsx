import "./App.css";
import FormBuilder from "./components/FormBuilder";

function App() {
  return (
    <>
      <div className="bg-slate-800 w-screen h-screen m-0 p-0 overflow-auto flex flex-col gap-5">
        <h1 className="text-lg md:text-5xl text-white mx-auto">
          Drag & Drop form builder
        </h1>
        <FormBuilder />
      </div>
    </>
  );
}

export default App;
