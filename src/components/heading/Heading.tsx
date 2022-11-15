type Heading = {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  text: string;
  color?: string;
  align?: string;
  margin?: string;
};
export const Heading: React.FC<Heading> = (
  { margin, align, color, h1, h2, h3, text },
  ...props
) => {
  const HeadingStyled = {
    color: color || "#2eac68",
    margin: margin ? margin + "px" : "20px",
    fontSize: h2 ? "1.2em" : h3 ? "1em" : "3em",
    lineHeight: 1.2,
  };
  if (h2) {
    return <h2 style={HeadingStyled}>{text}</h2>;
  } else if (h3) {
    return <h3 style={HeadingStyled}>{text}</h3>;
  } else {
    return <h1 style={HeadingStyled}>{text}</h1>;
  }
};
