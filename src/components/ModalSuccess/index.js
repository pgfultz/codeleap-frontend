import React, {useEffect, useRef} from 'react';

import './styles.css';

export default function ModalSuccess({closeSuccessPost}){

    const ref = useRef()

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                closeSuccessPost();
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
                <div className="modal-success" ref={ref}>
                    <p className="title">Success!</p>
                    <p>Post sent successfully!</p>
                    <button onClick={closeSuccessPost}>CLOSE</button>
                </div>
            </div>
        </React.Fragment>
    );
}