import ThemeButton from "@/features/home/theme-button";

const Navbar = () => {
  return (
    <div className="m-0 w-full border p-0">
      <div className="interWidth mx-auto flex w-full items-center justify-between border border-b-0 border-t-0 p-4">
        <h1>Logo</h1>
        <ThemeButton />
      </div>
    </div>
  );
};

export default Navbar;
