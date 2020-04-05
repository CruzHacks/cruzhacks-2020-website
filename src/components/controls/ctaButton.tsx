import React from 'react';

interface ButtonProps {
  [index: string]: {
    text: string;
    link: string;
  }[];
}

const CTAbuttonView: React.FC<ButtonProps> = ButtonProps => {
  return (
    <>
      <div className="ctaButton">
        {ButtonProps.info.map(button => (
          <a
            className="ctaButton__link"
            href={button.link}
            target="__blank"
            rel="noopener noreferrer"
            key={button.text}
          >
            <span className="ctaButton__text">{button.text}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default CTAbuttonView;
