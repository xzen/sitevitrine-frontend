import React from 'react';

const Presentation = () => {
    return(
        <>
            <div className='container presentation'>
                <img className='image-bienvenue' src={require('../img/Présentation.jpg')}/>
                <div>
                    <h4 className='mb-3'>Présentation</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Presentation;