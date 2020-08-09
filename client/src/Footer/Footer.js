import React from 'react'
import ReactDom from 'react-dom'

export const Footer = () => {
    return ReactDom.createPortal(
        <div>
            <h1>This is the footers tab</h1>
        </div>,
        document.getElementById('footer')
    )
}
