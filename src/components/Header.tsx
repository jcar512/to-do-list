type HeaderProps = {
  text: string;
};

function Header({ text }: HeaderProps) {
  return (
    <header className='w-full shadow-xl bg-[#EEE3CB]'>
      <h1 className='ml-8 my-5 text-5xl text-slate-700'>{text}</h1>
    </header>
  );
}

export default Header;
