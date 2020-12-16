import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(element => {
                    return {...element, 'author': 'Krismata'}
                });
                this.setState({posts: updatedPosts});
            });
    }
    showPost = (id) => {
        this.setState({selectedPostId: id});
    }
    render() {
        
        let posts = this.state.posts.map(post => {
            return <Post title={post.title}
                author={post.author}
                key={post.id}
                clicked={() => this.showPost(post.id)}/>
        })
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
                {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;