import React from 'react'
  interface CommonInputProps{
    type: string;
    name: string;
    placeholder: string;
    inputClass?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error: string |boolean;
  
}
const CommonInput: React.FC<CommonInputProps> =
  ({ type,
    name,
    placeholder,
    inputClass,
    value,
   onChange ,
    error,
  }) => {
  
  return (
      <div > 
          <input
          required
              type={type}
        name={name}
               value={value}
              onChange={onChange}
              placeholder={placeholder}
              className={`border border-solid border-off-grey shadow-inputBlack py-5 px-3.5 rounded-lg  focus:outline-none text-light-grey xl:max-w-[456px] w-full font-normal text-sm leading-normal  ${inputClass}`}
      />
        {error && <p className="text-red-500 text-sm mt-1 ">{error}</p>}
  
    </div>
  )
}
export default CommonInput