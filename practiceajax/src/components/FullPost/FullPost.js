import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        postSelected: null
    }
    componentDidUpdate() {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then(response => {
                this.setState({
                    postSelected: response.data
                })
            });
    }
    render() {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.id) {
         post = <p style={{textAlign: 'center'}}>loading...</p>;
        }
        if (this.state.postSelected) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.postSelected.title}</h1>
                    <p>{this.state.postSelected.content}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;