import React, { Component } from 'react';


import './Blog.css';
import axios from 'axios';
import Posts from '../Posts/Posts';
class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/'>New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                </section>
                <Posts />
            </div>
        );
    }
}

export default Blog;