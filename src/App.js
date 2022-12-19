
import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import ListBlog from "./pages/home/blogs/ListBlog";
import AddBlog from "./pages/home/blogs/AddBlog";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBlogs} from "./service/blogsService";

function App() {

  return (
    <div>
        <div className={"container-fluid"}>
            <Routes>
                <Route path={''} element={<Login/>}/>
                <Route path={'register'} element={<Register/>}/>
                <Route path={'home'} element={<Home/>}>
                    <Route path={''} element={<ListBlog/>}/>
                    <Route path={'add-blog'} element={<AddBlog/>}/>
                </Route>

            </Routes>
        </div>
    </div>
  );
}

export default App;
