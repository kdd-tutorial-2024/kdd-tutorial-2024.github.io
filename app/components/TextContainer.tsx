interface TextContainerProps {
  text: string;
  link?: string;
}
const TextContainer = ({ text, link }: TextContainerProps) => {
  return (
    <div className={`text-lg w-fit ${link && 'underline hover:text-gray-600'}`}>
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
