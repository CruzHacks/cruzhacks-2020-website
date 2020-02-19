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
            {button.text}
          </a>
        ))}
      </div>
    </>
  );
};

export default CTAbuttonView;
