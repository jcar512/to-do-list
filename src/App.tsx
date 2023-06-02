import Card from './components/Card';
import Form from './components/Form';
import Header from './components/Header';

import { useEffect, useState } from 'react';

import { taskList } from './utils/taskList';

function App() {
  const [taskArray, setTaskArray] = useState([]);

  const [formData, setFormData] = useState({
    task: '',
  });

  useEffect(() => {
    setTaskArray(taskList);
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formData.task !== '') {
      taskList.push(formData.task);
      window.localStorage.setItem('tasks', JSON.stringify(taskList));
      setFormData({
        task: '',
      });
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  function removeTask(index: number) {
    const newArray = [
      ...taskArray.slice(0, index),
      ...taskArray.slice(index + 1, taskArray.length),
    ];
    setTaskArray(newArray);
    window.localStorage.setItem('tasks', JSON.stringify(newArray));
  }

  return (
    <div className='flex flex-col h-screen my-10 mx-auto p-5 h-4/5 w-4/5 bg-slate-100 shadow-xl rounded border-2 border-color-white content-center'>
      <Header text='To do list' />
      <div className='flex mt-6'>
        <Form
          inputValue={formData.task}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      </div>
      <div className='mt-6'>
        {taskArray.map((element: string, index: number) => (
          <Card
            key={index}
            text={element}
            handleClick={() => removeTask(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
