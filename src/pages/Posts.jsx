import React, {useEffect, useRef, useState, useTransition} from "react";
import '../styles/App.css'
import {usePosts} from "../hooks/usePost";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPagesCount} from "../utils/pages";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Loader from "../components/UI/Loader/Loader";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";
import Navbar from "../components/UI/Navbar/Navbar";
import MyButton from "../components/UI/button/MyButton";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef();

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCount, limit))
    });

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchPosts()
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <div className='navbarContainer'>
                <Navbar />
            </div>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue="Amount of items on the page"
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: -1, name: 'Show all'}
                ]}
            />
            <div className='createPostContainer'>
                <MyButton className='createPostBtn' onClick={() => setModal(true)}>
                    Try To Create Your Own Post !
                </MyButton>
            </div>
            {postError &&
            <h1 style={{display: 'flex', justifyContent: 'center'}}>An error occurred: {postError}</h1>
            }

            <PostList remove={removePost} posts={sortedAndSearchedPosts}/>
            <div ref={lastElement} style={{height: "20px"}}/>
            {isPostsLoading &&
            <div style={{display: 'flex', justifyContent: 'center'}}><Loader/></div>
            }
        </div>
    );
}

export default Posts;
