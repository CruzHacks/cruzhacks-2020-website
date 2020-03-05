import React from 'react';

interface ButtonProps {
  [index: string]: {
    color: any;
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
            style={button.color}
            href={button.link}
          >
            <span className="ctaButton__text">{button.text}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default CTAbuttonView;
