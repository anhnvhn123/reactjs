import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import PostApi from '../../api/postApi';

import TablePost from './TablePost'

function Post() {
    const [postList, setPostList] = useState([])

    const [posts , setPosts] = useState([]);

    const fetchPostList = async () => {
        try {
            const params = {
                // id : 3,
            };
            let response = await PostApi.getAll(params);
            setPostList(response);
        } catch (error) {
            console.log(error)
        }
    }
   
    // console.log(postList);
    const createPost = async () => {
        try {
            const params = {
                title: 'service mefun',
                body: 'test  post ',
                userId: 10001
            }
            let response = await PostApi.create(params);
            setPosts(response);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect( () => {
        fetchPostList();
    },[])
    useEffect( () => {
        createPost();
    }, [])

 
    return (
        // <ul>
        //     {postList.map( (item, index) => (
        //       <li
        //         key={item.id}
        //       >
        //         {item.title}
        //       </li>  
        //     ))}
        // </ul>
        <TablePost rows={postList} />
    );
}

export default Post;