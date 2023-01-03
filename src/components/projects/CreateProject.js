import { useState } from "react"
import { useDispatch } from "react-redux"
import { createProject } from "../../redux/ProjectSlice"

const CreateProject = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] =useState('')
    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.target.id === 'title'? setTitle(e.target.value): setContent(e.target.value)
    }
    const handleSumbit =(e) => {
        e.preventDefault()
        const output = {title, content}
        dispatch(createProject(output))
        e.target.reset();
    }

    return ( 
        <div className="container">
            <form onSubmit={handleSumbit} className="white">
                <h5 className="grey-text text-darken-3">Create New Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea id="content"  className="materialize-textarea" onChange={handleChange}></textarea> 
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
     );
}
 
export default CreateProject;