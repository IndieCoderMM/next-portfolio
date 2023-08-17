// Desc: This is the field component for the contact form

const Field = ({ name, value, placeholder, handleChange }) => {
  return (
    <div className="flex w-full items-center gap-3  border-b-2 border-dark py-2 text-xl dark:border-light">
      <label className="sr-only">{name}</label>
      <div className="flex  h-10 w-10 items-center justify-center rounded-md border">
        😎
      </div>
      <input
        name={name}
        type={name === "email" ? "email" : "text"}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none"
        value={value}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        autoFocus
      />
    </div>
  );
};

export default Field;
