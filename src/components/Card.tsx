import Button from './Button';

type CardProps = {
  title: string;
  text: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Card({ title, text, handleClick }: CardProps) {
  return (
    <div className='flex flex-col relative p-4 mb-6 h-52 w-80 rounded shadow-xl'>
      <span className='mb-2 text-slate-700 font-semibold'>{title}</span>

      <span className='text-slate-700 font-semibold whitespace-normal overflow-wrap break-words'>
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
