import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {FaTrash, FaEdit} from 'react-icons/fa'
import {useDispatch, useSelector} from 'react-redux';

import {
  getPosts
} from '../../actions';

import './styles.css';

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getPostsReducer = useSelector(state => state.getPostsReducer);

  const [userName, setUserName] = useState(null);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');

  useEffect(() => {
    dispatch(getPosts());
    
    const user = localStorage.getItem('user');

    user ? setUserName(user) : navigate('/signup');
    
  }, [navigate, dispatch]);
  
  useEffect(() => {
    if(getPostsReducer){
      console.log(getPostsReducer);
    }    
  }, [getPostsReducer]);

  function logout(e){
    e.preventDefault();

    localStorage.clear();

    navigate('/signup');
  }
  function handlePost(){
     alert('postando');
  }

    return (
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
              <div className="post">
                <div className="post-header">
                  <h4>Title post</h4>
                  <div className="area-actions">
                    <div className="btn-action">
                      <FaTrash size={18} color="#fff" />
                    </div>
                    <div className="btn-action">
                      <FaEdit size={20} color="#fff" />
                    </div>
                  </div>
                </div>
                <div className="post-content">
                  <div className="post-content-header">
                    <b>@Victor</b>
                    <span>25 minutes ago</span>
                  </div>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and 
                  typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an unknown 
                  printer took a galley of type and scrambled it to make 
                  a type specimen book. It has survived not only five 
                  centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised 
                  in the 1960s with the release of Letraset sheets 
                  containing Lorem Ipsum passages, and more recently with 
                  desktop publishing software like Aldus PageMaker
                  </p>
                </div>
              </div>
              
              <div className="post">
                <div className="post-header">
                  <h4>Title post</h4>
                  <div className="area-actions">
                    <div className="btn-action">
                      <FaTrash size={18} color="#fff" />
                    </div>
                    <div className="btn-action">
                      <FaEdit size={20} color="#fff" />
                    </div>
                  </div>
                </div>
                <div className="post-content">
                  <div className="post-content-header">
                    <b>@Victor</b>
                    <span>25 minutes ago</span>
                  </div>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and 
                  typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an unknown 
                  printer took a galley of type and scrambled it to make 
                  a type specimen book. It has survived not only five 
                  centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised 
                  in the 1960s with the release of Letraset sheets 
                  containing Lorem Ipsum passages, and more recently with 
                  desktop publishing software like Aldus PageMaker
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;