import { ChangeEvent } from 'react';

type InputProps = {
  name: string;
  inputValue: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

function Input({
  name,
  handleInputChange,
  inputValue,
  placeholder,
}: InputProps) {
  return (
    <input
      maxLength={29}
      type='text'
      name={name}
      value={inputValue}
      onChange={handleInputChange}
      placeholder={placeholder}
      className='mb-2 w-5/6 bg-transparent font-semibold text-slate-700 placeholder:text-slate-500 focus:outline-none'
    />
  );
}

export default Input;
