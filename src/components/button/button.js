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
  paddingLeft,
}) => {
  const buttonStyle = {
    border: `${border} solid ${borderColor}`, // Set border width and color
    backgroundColor: `${backgroundColor}`,
    width: `${width}px`,
    height: `${height}px`,
    paddingLeft: `${paddingLeft}px`,
  };

  const textStyle = {
    color: `${textColor}`,
    fontSize: `${fontSize}px`,
    fontWeight: `${fontWeight}`,
  };

  return (
    <button className={`button ${className}`} style={buttonStyle}>
      <span className="text-wrapper" style={textStyle}>
        {text}
      </span>
    </button>
  );
};

export default ButtonReuse;
