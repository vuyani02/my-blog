import { useState } from 'react'
import BlogCard from './BlogCard'
import type { BlogType, ShowBlogAdderType } from '../../Types';
import BlogForm from './BlogForm';

const Blog = ({showBlogAdder, setShowBlogAdder}: ShowBlogAdderType) => {
    const [blogs, setBlogs] = useState<BlogType[]>([]);
    const [count, setCount] = useState<number>(0);
    const [edit, setEdit] = useState<boolean>(false);
    const [editBlog, setEditBlog] = useState<BlogType | null>(null);

    const getOldBlog = (blog: BlogType) => {
        setEditBlog(blog);
    }

    const addBlog = (blog: BlogType) => {
        setBlogs([...blogs, blog]);
    };

    const updateBlog = (newBlog: BlogType) => {
        setBlogs(blogs.map((blog) => blog.id === newBlog.id? newBlog : blog));
    };

    const deleteBlog = (id: string) => {
        setBlogs(prev => prev.filter(blog => blog.id !== id ));
    }

    return (
        <section>
            {
                blogs.map(({id, img, header, context, date}) => 
                <BlogCard
                    key={id}
                    id={id}
                    img={img} 
                    header={header} 
                    context={context} 
                    date={date}
                    deleteBlog={deleteBlog}
                    setShowBlogAdder={setShowBlogAdder}
                    setEdit={setEdit}
                    getOldBlog={getOldBlog}
                    />)
            }

            {showBlogAdder && <BlogForm 
                setShowBlogAdder={setShowBlogAdder} 
                addBlog={addBlog}
                count={count}
                setCount={setCount}
                edit={edit}
                setEdit={setEdit}
                editBlog={editBlog}
                setEditBlog={setEditBlog}
                updateBlog={updateBlog}
                />
            }
        </section>
    )
}

export default Blog