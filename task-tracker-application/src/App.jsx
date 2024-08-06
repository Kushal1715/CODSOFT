import AddTask from "./pages/AddTask";
import AllTasks from "./pages/AllTasks";
import CompletedTask from "./pages/CompletedTask";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IncompletedTasks from "./pages/IncompletedTasks";
import TaskListProvider from "./store/task-list-store";

function App() {
  return (
    <>
      <TaskListProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/addTask" element={<AddTask />} />
              <Route path="/" element={<AllTasks />} />
              <Route path="/completedTasks" element={<CompletedTask />} />
              <Route path="/incompletedTasks" element={<IncompletedTasks />} />
            </Route>
          </Routes>
        </Router>
      </TaskListProvider>
    </>
  );
}

export default App;
