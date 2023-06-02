import { ChangeEvent } from 'react';

type InputProps = {
  name: string;
  inputValue: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function Input({ name, handleInputChange, inputValue }: InputProps) {
  return (
    <input
      type='text'
      name={name}
      value={inputValue}
      onChange={handleInputChange}
      placeholder='Write something!'
      className='w-5/6 bg-transparent rounded border-[#C58940] border-b-2 border-black border-dotted font-semibold text-slate-700 placeholder:text-slate-500 focus:outline-none'
    />
  );
}

export default Input;
