import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Test from "./Components/Test";
import { UserContextProvider } from "./ContextAPI/UserContext";
import CardContent from "./Components/CardContent";
import CreateBlog from "./Pages/CreateBlog";
import IndividualBlog from "./Pages/IndividualBlog";
import PageNotFound from "./Pages/PageNotFound";
import EditBlog from "./Pages/EditBlog";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="cardContent" element={<CardContent />} />
          <Route path="create" element={<CreateBlog />} />
          <Route path="blog/:id" element={<IndividualBlog />} />
          <Route path="blog/edit/:id" element={<EditBlog />} />
        </Route>
        <Route path="/current" element={<Test />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
