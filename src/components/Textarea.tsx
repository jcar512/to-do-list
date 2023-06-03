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
      maxLength={150}
      name={name}
      value={inputValue}
      onChange={handleInputChange}
      placeholder={placeholder}
      className='mb-2 bg-transparent h-32 resize-none font-medium text-slate-700 placeholder:text-slate-500 focus:outline-none'
    />
  );
}

export default Textarea;
