import React from 'react'
import ReactDOM from 'react-dom'

export default function Portals() {
    const root_portal = document.querySelector('#root-portal');
    const elemant = (
        <div>
            <h1>HI, I am From Portals</h1>
        </div>
    );

    return ReactDOM.createPortal(elemant,root_portal);
}
