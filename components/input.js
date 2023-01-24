import React from 'react';

const Input = ({id, name, label, placeholder, value, onChange, error, errorMessage = '', ...props}) => {

    //Custom input component to be able to work with TailwindCSS
    return (  
        <div className="w-full mb-3">
            <label className="block text-lg" htmlFor={id}>{label}</label>
            <input 
             value={value}
             onChange={onChange}
             autoComplete='off'
             type="text" 
             id={id} 
             name={name} 
             placeholder={placeholder}
             className="w-full text-gray-900 placeholder-gray-400 border-gray-500 border-opacity-50 rounded-md focus:ring-2 focus:ring-blue-500"
             {...props}/>
             {error ? <p className="text-red-500 italic text-sm">*{errorMessage}</p> : null}
        </div>
    );
}
 
export default Input;