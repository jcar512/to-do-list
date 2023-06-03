import { ChangeEvent } from 'react';

type TextareaProps = {
  name: string;
  inputValue: string;
  handleInputChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
};

function Textarea({
  name,
  handleInputChange,
  inputValue,
  placeholder,
}: TextareaProps) {
  return (
    <textarea
      maxLength={145}
      name={name}
      value={inputValue}
      onChange={handleInputChange}
      placeholder={placeholder}
      className='mb-2 bg-transparent font-semibold text-slate-700 placeholder:text-slate-500 focus:outline-none'
    />
  );
}

export default Textarea;
