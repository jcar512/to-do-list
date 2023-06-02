type HeaderProps = {
  text: string;
};

function Header({ text }: HeaderProps) {
  return (
    <h1 className='text-6xl mx-auto text-center text-slate-700'>{text}</h1>
  );
}

export default Header;
