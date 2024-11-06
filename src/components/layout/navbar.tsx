import ThemeButton from "@/features/home/theme-button";

const Navbar = () => {
  return (
    <div className="m-0 w-full border-0 p-0">
      <div className="interWidth borderVr mx-auto flex w-full items-center justify-between p-4">
        <h1>Logo</h1>
        <ThemeButton />
      </div>
    </div>
  );
};

export default Navbar;
