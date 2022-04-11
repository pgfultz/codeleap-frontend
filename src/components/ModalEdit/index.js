import React, {useEffect, useState, useRef} from 'react';

import './styles.css';

export default function ModalEdit({
    closeModal, 
    confirmModal,
    editTitle,
    editContent,
    setEditTitle,
    setEditContent,
}){

    const ref = useRef();

    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                closeModal();
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [])

    return(
        <React.Fragment>
            <div className="bg-modal">
                <div className="modal-edit" ref={ref}>
                    <p className="title">Edit item</p>
                    <p className='p-label'>Title</p>
                    <input 
                    type="text" 
                    name="posttitle" 
                    id="posttitle" 
                    placeholder='Hello world'
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <p className='p-label'>Content</p>
                    <textarea 
                    name="postcontent" 
                    id="postcontent" 
                    placeholder='Content here'
                    rows={5}
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    />
                    <button onClick={confirmModal}>SAVE</button>
                </div>
            </div>
        </React.Fragment>
    );
}