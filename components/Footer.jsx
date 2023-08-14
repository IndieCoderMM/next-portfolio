const Footer = () => {
  return (
    <footer className="w-full border-t-2 font-medium text-lg">
      <div className="grid place-items-center py-10 px-32">
        <p>{new Date().getFullYear()} &copy; All Rights Reserved.</p>
        <p>
          Built by{' '}
          <a href="/" className="underline underline-offset-2">
            IndieCoderMM
          </a>
        </p>
        <p>
          <a href="/" className="underline underline-offset-2">
            Say Hello
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
