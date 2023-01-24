import React from 'react';

const TextArea = ({id, name, label, placeholder, value, onChange, error, errorMessage, ...props}) => {

    //Custom text area to be used with TailwindCSS
    return (  
        <div className="w-full mb-3">
            <label className="block text-lg" htmlFor={id}>{label}</label>
            <textarea autoComplete='off' 
             id={id} 
             name={name}
             rows={5}
             placeholder={placeholder}
             value={value}
             onChange={onChange}
             className="w-full text-gray-900 placeholder-gray-400 border-gray-500 border-opacity-50 rounded-md focus:ring-2 focus:ring-indigo-500"
             {...props}>
             </textarea>
             {error ? <p className="text-sm italic text-red-500">*{errorMessage}</p> : null}
        </div>
    );
}
 
export default TextArea;