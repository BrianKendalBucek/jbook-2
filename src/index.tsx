// NEED TO PASS THE --legacy-peer-deps FLAG TO EVERY NPM INSTALL COMMAND THAT IS MADE GOING FORWARD IN THIS COURSE
// npm install --save-exact @monaco-editor/react@3.7.5 --legacy-peer-deps

import "bulmaswatch/superhero/bulmaswatch.min.css";
import ReactDOM from "react-dom/client";
import TextEditor from "./components/text-editor";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);

const App = () => {
  
  return (
    <div>
      <TextEditor />
    </div>
  );
};

root.render(<App />);
