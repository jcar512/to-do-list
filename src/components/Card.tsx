import Button from './Button';

type CardProps = {
  title: string;
  text: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Card({ title, text, handleClick }: CardProps) {
  return (
    <div className='flex flex-col relative ease-in-out duration-300 bg-[#ECF8F9] p-4 mb-6 h-52 w-80 md:w-72 rounded shadow-[5px_5px_15px_-5px_rgba(0,0,0,0.3)]'>
      <span className='mb-2 text-slate-600 font-bold'>{title}</span>

      <span className='text-slate-600 font-medium whitespace-normal overflow-wrap break-words'>
        {text}
      </span>

      <Button
        handleClick={handleClick}
        text='Remove'
        classProps='w-20 absolute top-[170px] right-4'
      />
    </div>
  );
}

export default Card;
