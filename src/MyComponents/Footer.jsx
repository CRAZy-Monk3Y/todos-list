import React from 'react'

export const Footer = () => {
    let footerStyle = {
        opacity: '70%', 
        position: 'absolute', 
        top: '90vh', 
        width: '100%'
    }
    return (
        <div className='bg-dark text-light py-3' style={footerStyle}>
            <p>
                Copyright &copy; MyTodoList.com
            </p>
        </div>
    )
}
