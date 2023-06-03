type ButtonProps = {
  text: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  classProps?: string;
};

function Button({ text, handleClick, classProps }: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={`${classProps} ease-in-out duration-300 rounded font-semibold text-[#4F709C] hover:text-[#9DB2BF] focus:outline-none focus:ring`}
    >
      {text}
    </button>
  );
}

export default Button;
