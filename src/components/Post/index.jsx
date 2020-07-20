import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import PostApi from '../../api/postApi';

function Post() {
    const [postList, setPostList] = useState([])

    const [posts , setPosts] = useState([]);
    useEffect(() => {
        const fetchPostList = async () => {
            try {
                const param = {
                    id : 3,
                };
                let response = await PostApi.getAll(param);
                setPostList(response);
            } catch (error) {
                console.log(error)
            }
        }
        fetchPostList();
        console.log(postList);
    }, [])

    useEffect(() => {
        const createPost = async () => {
            try {
                const params = {
                    title: 'service mefun',
                    body: 'test  post ',
                    userId: 1000
                }

                const response = await PostApi.create(params);
                setPosts(response);
            } catch (error) {
                console.log(error)
            }
        }
        createPost();
        console.log(posts);
    }, [])

    function removePost(id){
        // const newPostList = [...postList];
        // newPostList.filter(
        //      newPostList.id = id
        // ).splice(id);
        // setPostList(newPostList);
    }
    return (
        <ul>
            {postList.map( (item, index) => (
              <li
                key={item.id}
              >
                {item.title}
              </li>  
            ))}
        </ul>
    );
}

export default Post;