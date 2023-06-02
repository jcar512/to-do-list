import Button from './Button';

type CardProps = {
  text: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Card({ text, handleClick }: CardProps) {
  return (
    <div className='flex space-x-4 items-center'>
      <div className='w-5/6 my-4 p-2 rounded border-2 border-slate-500'>
        <span className='text-slate-700 font-semibold'>{text}</span>
      </div>
      <Button handleClick={handleClick} text='Remove' />
    </div>
  );
}

export default Card;
