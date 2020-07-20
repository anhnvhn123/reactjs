import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

Post.propTypes = {
    
};

const [post, setPost] = useState([])

function Post(props) {

    useEffect( () => {
        async function getPost() {
            try {
                const response = Axios.get('https://jsonplaceholder.typicode.com/todos');    
                setPost[response];
            } catch (error) {
                console.log("Field data get api" )
            }
        }
        getPost();
        console.log(post);
    }, [])
    return (
        <div>
            
        </div>
    );
}

export default Post;