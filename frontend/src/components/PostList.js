import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './PostList.css';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        const response = await axios.get(`http://localhost:5000/posts`);
        setPosts(response.data);
    };

    const deletePost = async (id) => {
        await axios.delete(`http://localhost:5000/posts/${id}`);
        getPosts();
    };
    return (
        <div className="containter">
            <div className="container">
                <Link to="/add" className='button is-primary w-2'>
                    Add Post
                </Link>
            </div>
            <div className='containter'>
                <table className='table is-striped center'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post,index) => (
                            <tr key={post.id}>
                                <td>{index + 1}</td>
                                <td>{post.title}</td>
                                <td>{post.description}</td>
                                <td>
                                    <Link to={`/edit/posts/${post.id}`}
                                    className='button is-dark mx-2'>
                                        Edit
                                    </Link>
                                    <button onClick={() => deletePost(post.id)}
                                    className='button is-danger mx-2'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default PostList;