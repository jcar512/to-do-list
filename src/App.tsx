import Card from './components/Card';
import Form from './components/Form';
import Header from './components/Header';

import { useEffect, useState } from 'react';

type TaskData = {
  title: string;
  task: string;
};

function App() {
  const [dataArray, setDataArray] = useState<TaskData[]>([]);

  const [formData, setFormData] = useState({
    title: '',
    task: '',
  });

  useEffect(() => {
    const storedData = window.localStorage.getItem('tasksData');
    const data = storedData ? JSON.parse(storedData) : [];

    setDataArray(data);
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (formData.title !== '' && formData.task !== '') {
      const newData = {
        title: formData.title,
        task: formData.task,
      };

      const data = [...dataArray, newData];

      setDataArray(data);

      window.localStorage.setItem('tasksData', JSON.stringify(data));

      setFormData({
        title: '',
        task: '',
      });
    }
  }

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  function removeTask(index: number) {
    const newData = [
      ...dataArray.slice(0, index),
      ...dataArray.slice(index + 1, dataArray.length),
    ];

    setDataArray(newData);

    window.localStorage.setItem('tasksData', JSON.stringify(newData));
  }

  return (
    <div className='flex flex-col content-center'>
      <Header text='Taskify' />
      <div className='flex mt-6'>
        <Form
          inputValueTitle={formData.title}
          inputValueTask={formData.task}
          handleSubmit={handleSubmit}
          handleTitleInputChange={handleInputChange}
          handleTaskInputChange={handleInputChange}
        />
      </div>
      <div className='mt-10'>
        <div className='mx-auto w-5/6 flex flex-col items-center md:flex-row md:flex-wrap md:grid-col md:gap-6'>
          {dataArray.map(({ title, task }, index: number) => (
            <Card
              key={index}
              title={title}
              text={task}
              handleClick={() => removeTask(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
