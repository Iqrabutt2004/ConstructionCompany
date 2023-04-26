import "../HomeMain/HomeMain.css";
const ButtonReuse = ({
  className,
  text,
  border,
  borderColor,
  backgroundColor,
  width,
  height,
  textColor,
  fontSize,
  fontWeight,
  padding,
}) => {
  const buttonStyle = {
    border: `${border} solid ${borderColor}`, // Set border width and color
    backgroundColor: `${backgroundColor}`,
    width: `${width}px`,
    height: `${height}px`,
    padding: `${padding}`,
  };

  const textStyle = {
    color: `${textColor}`,
    fontSize: `${fontSize}px`,
    fontWeight: `${fontWeight}`,
  };

  return (
    <button className={className} style={buttonStyle}>
      <span className="text-wrapper" style={textStyle}>
        {text}
      </span>
    </button>
  );
};

export default ButtonReuse;
