import React from 'react';

interface ButtonProps {
  [index: string]: {
    text: string;
    link: string;
    className: string;
  }[];
}

const CTAbuttonView: React.FC<ButtonProps> = (ButtonProps) => {
  return (
    <>
      <div className="ctaButton">
        {ButtonProps.info.map((button) => {
          return (
            <a
              className={button.className + '__link'}
              href={button.link}
              target="__blank"
              rel="noopener noreferrer"
              key={button.text}
            >
              <span className={button.className + '__text'}>{button.text}</span>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default CTAbuttonView;
