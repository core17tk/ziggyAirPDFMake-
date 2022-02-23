import UserInput from "./components/UserInput";
import TaskState from './context/TaskState';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import GenerateGraph_03 from "./components/GenerateGraph_03";
import PreviewPage_02 from './components/PreviewPage_02'

function App() {
  return (
    <div>
      <TaskState>

        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={ <GenerateGraph_03/> } /> */}

            <Route path="/" element={<UserInput/>} />
            <Route path="/previewPage" element={ <PreviewPage_02/> } />

          </Routes>
        </BrowserRouter>
          
      </TaskState>
    
    </div>
  );
}

export default App;
