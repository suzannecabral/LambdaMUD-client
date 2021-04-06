import React from 'react';

const LogoutButton = (props) => {

    const handleClick = (e) => {
        window.localStorage.clear();
        window.location.reload();
    }

    return (
        <div>
            <button onClick={handleClick}>Log Out</button>
        </div>
    );
}

export default LogoutButton;
