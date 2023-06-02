import Button from './Button';
import Input from './Input';

type FormProps = {
  inputValue: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Form({ inputValue, handleSubmit, handleInputChange }: FormProps) {
  return (
    <form onSubmit={handleSubmit} className='w-full'>
      <div className='flex space-x-4'>
        <Input
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          name='task'
        />
        <Button text='Add' />
      </div>
    </form>
  );
}

export default Form;
