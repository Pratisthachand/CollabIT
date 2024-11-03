import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Login from "./pages/login";
import Tasks from "./pages/tasks";
import Trash from "./pages/trash";
import Users from "./pages/users";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6]">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/completed/:status" element={<Tasks />} />
          <Route path="/in-progress/:status" element={<Tasks />} />
          <Route path="/todo/:status" element={<Tasks />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/task/:id" element={<Tasks />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>

      <Toaster richColors />
    </main>
  );
}

export default App;
