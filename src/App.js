import "./App.css";
import Form from "./views/Form";
import IsiTable from "./views/IsiTable";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Form />
      <IsiTable />
    </div>
  );
}

export default App;
