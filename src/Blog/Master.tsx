import './css/master.css'
import Nav from './components/Nav'
import ToFollow from './components/tofollow/toFollow'
import Trends from './components/trends/Trends'
import Topics from './components/Topics'
import { FaPlusCircle } from 'react-icons/fa'
import { useState } from 'react'
import Blog from './components/blog/Blog'

const Master = () => {

    const [showBlogAdder, setShowBlogAdder] = useState<boolean>(false);

    return (
        <article className='page'>  <header>
                <Nav/>
            </header>
            <main>
                <article className='blogs-container'>
                    <section>
                        <button onClick={() => setShowBlogAdder(true)} className='blog-btn'>
                            Add New Blog <FaPlusCircle className='add-icon'/>
                        </button>
                        <Blog showBlogAdder={showBlogAdder} setShowBlogAdder={setShowBlogAdder}/>
                    </section>
                </article>

                <aside className='aside'>
                    <ToFollow/>
                    <Trends/>
                    <Topics/>
                </aside>
            </main>
        </article>
    )
}

export default Master