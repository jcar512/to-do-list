type ButtonProps = {
  text: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  classProps?: string;
};

function Button({ text, handleClick, classProps }: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={`${classProps} rounded bg-[#E1D4BB] hover:bg-[#CBB279] h-10 font-semibold text-[#537188] focus:outline-none focus:ring focus:ring-[#C58940]`}
    >
      {text}
    </button>
  );
}

export default Button;
