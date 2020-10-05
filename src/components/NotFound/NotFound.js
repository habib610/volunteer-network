import React from 'react';

const NotFound = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', textAlign: 'center'}}>
            <div>
            <h1>Sorry Page Not Found</h1>
            <h4 style={{ color: 'red', fontSize: '50px'}}>404</h4>
            </div>
        </div>
    );
};

export default NotFound;