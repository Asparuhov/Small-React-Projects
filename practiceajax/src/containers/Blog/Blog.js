import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import Post from '../Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import axios from 'axios';
import Posts from '../Posts/Posts';
class Blog extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/' exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'

                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path='/' exact component={Posts} />
                <Route path='/new-post' exact component={NewPost} />
                
            </div>
        );
    }
}

export default Blog;