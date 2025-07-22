import { FaBookmark, FaEdit, FaTrash } from 'react-icons/fa'
import './css/blogcard.css'
import type { blogCardPropType, BlogType } from '../../Types'

const BlogCard = ({
        id,
        img, 
        header, 
        context, 
        date, 
        deleteBlog, 
        setShowBlogAdder, 
        setEdit, 
        getOldBlog}: blogCardPropType) => {

    const handleEdit = () => {
        setShowBlogAdder(true);
        setEdit(true);
        const blog: BlogType = {
            id,
            img, 
            header, 
            context, 
            date 
        }
        getOldBlog(blog);
    };
    
    return (
        <div className='blog-card-container'>
            <img src={img} alt="blog image" className='blog-img'/>
            <div>
                <h3 className='blog-name'>{header}</h3>

                <div className='p-container'>
                    <p className='text'>{context}</p>
                </div>

                <div className="card-footer">
                    
                    <time dateTime='2025-06-04'>{date}</time>

                    <div className="icons">
                        <FaBookmark className='icon bookmark'/>
                        <FaEdit onClick={handleEdit} className='icon edit'/>
                        <FaTrash onClick={() => deleteBlog(id)} className='icon delete'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard