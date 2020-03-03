import React from 'react';

interface NewsLink {
  [index: string]: {
    title: string;
    source: string;
    url: string;
    description: string;
    thumb: string;
  }[];
}

const NewsCardView: React.FC<NewsLink> = NewsLinks => {
  return (
    <>
      <div className="postLanding-news__card-container">
        {NewsLinks.links.map(link => (
          <a
            className="postLanding-news__card-link"
            href={link.url}
            target="__blank"
            rel="noopener noreferrer"
            key={link.source}
          >
            <div
              className={'postLanding-news__card-' + link.thumb}
            >
              <img
                className="postLanding-news__card-thumb"
                src={require('../../../../assets/postLanding/newsThumb/' +
                  link.thumb +
                  '.png')}
                alt={link.title + ' thumbnail'}
              />
              <div className="postLanding-news__card-text">
                <span className="postLanding-news__card-text--title">
                  {link.title}
                </span>
                <p className="postLanding-news__card-text--description">
                  {link.description}
                </p>
                <span className="postLanding-news__card-text--source">
                  {'— ' + link.source}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default NewsCardView;
