import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";

function App() {
  return (
    <Router>
      <div classname="">
        <div className="">
          <div className="">
            <Routes>
              <Route exact path="/" element={<PostList />} />
              <Route exact path="/add" element={<AddPost />} />
              <Route exact path="/edit/posts/:id" element={<EditPost />}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
