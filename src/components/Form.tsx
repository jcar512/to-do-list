import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';

type FormProps = {
  inputValueTitle: string;
  inputValueTask: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleTitleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTaskInputChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

function Form({
  inputValueTitle,
  inputValueTask,
  handleSubmit,
  handleTitleInputChange,
  handleTaskInputChange,
}: FormProps) {
  return (
    <div className='relative mx-auto p-4 h-52 w-96 border rounded shadow-lg'>
      <form onSubmit={handleSubmit} className='w-full'>
        <div className='flex flex-col'>
          <Input
            inputValue={inputValueTitle}
            handleInputChange={handleTitleInputChange}
            placeholder='Title'
            name='title'
          />
          <Textarea
            inputValue={inputValueTask}
            handleInputChange={handleTaskInputChange}
            placeholder='Notes...'
            name='task'
          />
        </div>
        <Button
          text='Add'
          classProps='rounded-full w-10 absolute top-[185px] right-4'
        />
      </form>
    </div>
  );
}

export default Form;
