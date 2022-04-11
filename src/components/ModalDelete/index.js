import React, {useEffect, useRef} from 'react';

import './styles.css';

export default function ModalDelete({closeModal, confirmModal, idPost}){

    const ref = useRef()

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
                <div className="modal-delete" ref={ref}>
                    <p>Are you sure you want to delete this item?</p>
                    <div className="area-btn">
                        <button onClick={closeModal}>Cancel</button>
                        <button onClick={confirmModal}>OK</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}