import React from 'react';
import { InputStyle } from './InputField.styled';
import { InputFieldInterface } from './InputField.interface';


const InputField : React.FC<InputFieldInterface> = (props) =>{

    return (
         
        <InputStyle {...props} />
    );
}

export default InputField;