import './css/blogform.css'
import type { blogFormPropType, BlogType } from '../../Types'
import { useState } from 'react'

const BlogForm = ({
        setShowBlogAdder, 
        addBlog, 
        count, 
        setCount, 
        edit, 
        setEdit, 
        editBlog, 
        updateBlog,
        setEditBlog}: blogFormPropType) => {

    const [header, setHeader] = useState<string>(editBlog?.header || '');
    const [context, setContext] = useState<string>(editBlog?.context || '');
    const [img, setImg] = useState<string>(editBlog?.img || '');
    const [id, _setId] = useState<string>(editBlog?.id || count + '');

    const handleImg = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.target.files![0] && setImg(URL.createObjectURL(e.target.files![0]));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const dateArr: string[] = Date().split(' ');
        const date: string = dateArr[2] + ' ' + dateArr[1] + ' ' + dateArr[3];
        const blog: BlogType = {
            id,
            img,
            header,
            context,
            date
        };

        if(edit){
            updateBlog(blog);
            setEdit(false);
            setEditBlog(null);
        }

        else{
            addBlog(blog);
            setCount(count + 1);
        }

        setHeader('');
        setContext('');
        setImg('');
        setShowBlogAdder(false);
    };

    const cancel = () => {
        setShowBlogAdder(false);
        setEdit(false);
        setEditBlog(null);
    };

    return (
        <section className='blog-form-container'>
            <span className='close' onClick={cancel}>&times;</span>
            <h4>{edit? 'Edit Blog' : 'Add Blog'}</h4>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="header" className='label'>Header</label>
                <input type="text" id='header' value={header} onChange={(e) => setHeader(e.target.value)} className='input-header' placeholder='Enter the header'/>

                <label htmlFor="context" className='label'>Context</label>
                <textarea id='context' value={context} onChange={e => setContext(e.target.value)} className='textarea' placeholder='Enter the context'></textarea>

                <label htmlFor="image" className='label'>Image</label>
                <input id='image' onChange={handleImg} type="file" accept='image/*'/>

                <div className='btns-container'>
                    <button type='submit' className='form-btn add-btn'>
                        {edit? 'Update' : 'Add'}
                    </button>
                    <button className='form-btn cancel-btn' onClick={cancel}>Cancel</button>
                </div>
            </form>
        </section>
    )
}

export default BlogForm