import React from 'react';
import './form-input.styles.scss'


const FormInput = ({handleChange, label, ...props}: any) => {
    return (
        <div>
            <div className="group">
                <input type="text" onChange={handleChange} {...props}  className="form-input"/>
                {
                    label?
                        (<label className={`${props.value.length? 'shrink': ''} form-input-label `} >
                            {label}
                        </label>)
                        :null
                }
            </div>
        </div>
    );
};

export default FormInput;
