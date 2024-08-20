interface TextContainerProps {
  text: string;
  link?: string;
}
const TextContainer = ({ text, link }: TextContainerProps) => {
  return (
    <div className={`text-lg ${link && 'underline'}`}>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ) : (
        text
      )}
    </div>
  );
};

export default TextContainer;
