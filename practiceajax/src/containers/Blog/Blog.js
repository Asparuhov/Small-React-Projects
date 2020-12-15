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
            <div>
                <section className="Posts">
                {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} title={this.props.state.posts.title}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;