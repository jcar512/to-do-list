type ButtonProps = {
  text: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button({ text, handleClick }: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className='rounded bg-[#967E76] hover:bg-[#C38154] w-28 h-10 font-semibold focus:outline-none focus:ring focus:ring-[#C58940]'
    >
      {text}
    </button>
  );
}

export default Button;
