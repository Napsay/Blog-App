import {useState, useEffect} from 'react'
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';


const EditPost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const updatePost = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/posts/${id}`, { 
            title: title,
            description: description,
        });
        navigate("/");
    };

    useEffect(() => {
        getPostById();
    }, []);

    const getPostById = async () => {
        const response = await axios.get(`http://localhost:5000/posts/${id}`);
        setTitle(response.data.title);
        setDescription(response.data.description);
    };
    return (
        <div class = "containter">
            <form onSubmit={updatePost}>
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
                    <label htmlFor="">Description:</label>
                    <input
                        type="textarea"
                        className= "textarea"
                        value = {description}
                        placeholder='Description'
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button className="button is-primary">Update Post</button>
            </form>
        </div>
    );
};
export default EditPost;
