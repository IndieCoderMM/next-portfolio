const CustomButton = ({ children, onClick, type = "button" }) => {
  return (
    <button className="primaryBtn" type={type} onClick={onClick}>
      <span />
      <span />
      <div>{children}</div>
    </button>
  );
};

export default CustomButton;
