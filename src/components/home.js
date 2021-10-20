import { useState } from 'react';
import BlogList from './BlogList';




const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'hello', author: 'joe', id: 1 },
        { title: 'welcome', body: 'how are you', author: 'john', id: 2 },
        { title: 'tips', body: 'good bye', author: 'jason', id: 3 }

    ]);



    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'jason')} title="Jason's blogs" />


                </div>


    );
}

export default Home;