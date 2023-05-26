import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './PostList.css';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const savePost = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/posts', { 
            title: title,
            description: description,
        });
        navigate('/');
    }
return(
        <div class = "containter">
            <form onSubmit={savePost}>
                <div className="field">
                    <label className="label" htmlFor="">
                    Title
                    </label>
                    <input
                     className = "input"
                     type = "text"
                     value = {title}
                     placeholder='Title'
                     onChange={(e) => setTitle(e.target.value)}
                     />
                </div>
                <div className="field">
                    <label className="label" htmlFor="">
                        Description
                    </label>
                    <input
                        type="textarea"
                        className= "textarea"
                        value = {description}
                        placeholder='Description'
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button className="button is-primary">Save Post</button>
            </form>
        </div>
);
};
export default AddPost;