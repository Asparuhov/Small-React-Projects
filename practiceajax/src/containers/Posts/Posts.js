import React, {Component} from 'react';
import Post from '../../components/Post/Post'; 
import axios from 'axios';
import './Posts.css';
import {Route} from 'react-router-dom';
class Posts extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
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
                <div className='Posts'>
                {posts}
                </div>
        );
    }
}


export default Posts;