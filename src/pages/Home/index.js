import { Fragment, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {FaTrash, FaEdit} from 'react-icons/fa'
import {useDispatch, useSelector} from 'react-redux';

import {
  clearAllReducer,
  getPosts,
  postPosts,
  editPosts,
  deletePosts,
} from '../../actions';

import ModalSuccess from '../../components/ModalSuccess';
import ModalDelete from '../../components/ModalDelete';
import ModalEdit from '../../components/ModalEdit';

import './styles.css';

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getPostsReducer = useSelector(state => state.getPostsReducer);
  const posttPostsReducer = useSelector(state => state.posttPostsReducer);
  const editPostsReducer = useSelector(state => state.editPostsReducer);
  const deletePostsReducer = useSelector(state => state.deletePostsReducer);

  const [userName, setUserName] = useState(null);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postData, setPostData] = useState(null);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    dispatch(getPosts());
    
    const user = localStorage.getItem('user');

    user ? setUserName(user) : navigate('/signup');
    
  }, [navigate, dispatch]);
  
  useEffect(() => {
    if(getPostsReducer){
      setPostData(getPostsReducer.results);

      //console.log(getPostsReducer);
    }    
  }, [getPostsReducer]);

  useEffect(() => {
    if(posttPostsReducer){
      setModalSuccess(true);

      //console.log(posttPostsReducer);
    }    
  }, [posttPostsReducer]);

  useEffect(() => {
    if(editPostsReducer){
      dispatch(clearAllReducer());

      console.log(editPostsReducer);
    }    
  }, [editPostsReducer, dispatch]);

  useEffect(() => {
    if(deletePostsReducer){
      dispatch(clearAllReducer());

      //console.log(deletePostsReducer);
    }    
  }, [deletePostsReducer, dispatch]);

  function logout(e){
    e.preventDefault();

    localStorage.clear();

    navigate('/signup');
  }

  function handlePost(){
    const payload = {
      username: userName,
      title: postTitle,
      content: postContent,
    }

    dispatch(postPosts(payload));
  }

  function closeSuccessPost(){
    dispatch(clearAllReducer());

    setPostTitle('');
    setPostContent('');
    setModalSuccess(false);
  }

  function confirmDeletePost(){
    dispatch(deletePosts({id: deleteId}));

    setDeleteId(null);
  }

  function closeDeletePost(){
    dispatch(clearAllReducer());

    setDeleteId(null);
  }

  function confirmEditPost(){
    const payload = {
      id: editId,
      data: {
        title: editTitle,
        content: editContent,
      }
    }

    dispatch(editPosts(payload));

    setEditId(null);
    setEditTitle('');
    setEditContent('');
  }

  function closeEditPost(){
    dispatch(clearAllReducer());

    setEditId(null);
    setEditTitle('');
    setEditContent('');
  }

  function calcDate(val){
    const dataAtual = new Date();
    const postDate = new Date(val);

    const msec = Math.abs( dataAtual - postDate );

    //const min = Math.floor((msec/1000)/60);

    function msecToTime(ms) {
      let seconds = (ms / 1000).toFixed(0);
      let minutes = (ms / (1000 * 60)).toFixed(0);
      let hours = (ms / (1000 * 60 * 60)).toFixed(0);
      let days = (ms / (1000 * 60 * 60 * 24)).toFixed(0);
      if (seconds < 60) return seconds + " seconds ago";
      else if (minutes < 60) return minutes + " minutes ago";
      else if (hours < 24) return hours + " hours ago";
      else return days + " days ago"
    }
    
    return msecToTime(msec);
  }

    return (
      <Fragment>
        <div className="background-all">
          <div className="container-home">
            <div className="header">
              <div className="header-side">
                <h4>CodeLeap Network</h4>
              </div>
              <div className="header-side align-right">
                <span>{userName}</span>
                <a href='/' onClick={logout}>Sair</a>
              </div>
            </div>

            <div className="content">
              <div className="box-create-post">
                <h5>What's on your mind?</h5>
                <p>Title</p>
                <input 
                  type="text" 
                  name="posttitle" 
                  id="posttitle" 
                  placeholder='Hello world'
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                />
                <p>Content</p>
                <textarea 
                  name="postcontent" 
                  id="postcontent" 
                  placeholder='Content here'
                  rows={5}
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                />
                <button 
                  onClick={handlePost} 
                  disabled={postTitle.length > 0 && postContent.length > 0 ? false : true}
                >
                  CREATE
                </button>
              </div>

              <div className="area-posts">
                {postData != null ? (
                  postData.length ? (
                    postData.map((item, ind) => (
                      <div className="post" key={ind}>
                        <div className="post-header">
                          <h4>{item.title}</h4>
                          {item.username == userName && (
                            <div className="area-actions">
                              <div 
                                className="btn-action" 
                                onClick={() => setDeleteId(item.id)}
                              >
                                <FaTrash size={18} color="#fff" />
                              </div>
                              <div
                                className="btn-action"
                                onClick={() => {
                                  setEditId(item.id);
                                  setEditTitle(item.title);
                                  setEditContent(item.content)
                                }}
                              >
                                <FaEdit size={20} color="#fff" />
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="post-content">
                          <div className="post-content-header">
                            <b>@{item.username}</b>
                            <span>{calcDate(item.created_datetime)}</span>
                          </div>
                          <p>{item.content}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <span>Sem resultados</span>
                  )
                ) : (
                  <span>Carregando...</span>
                )}
              
              </div>
            </div>
          </div>
        </div>

        {modalSuccess && (
          <ModalSuccess closeSuccessPost={closeSuccessPost} />
        )}

        {deleteId && (
          <ModalDelete
            closeModal={closeDeletePost}
            confirmModal={confirmDeletePost}
            idPost={deleteId}
          />
        )}

        {editId && (
          <ModalEdit
            closeModal={closeEditPost}
            confirmModal={confirmEditPost}
            editTitle={editTitle}
            editContent={editContent}
            setEditTitle={setEditTitle}
            setEditContent={setEditContent}
          />
        )}

      </Fragment>
    );
  }
  
  export default Home;