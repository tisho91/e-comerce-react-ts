import React from 'react';
import './custom-button.styles.scss'

const CustomButton = (props:any) => {
    return (
        <div>
            <button {...props} className='custom-button'></button>
        </div>
    );
};

export default CustomButton;
