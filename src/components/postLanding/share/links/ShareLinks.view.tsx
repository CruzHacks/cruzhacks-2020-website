import React from 'react';

interface media {
  [index: string]: {
    type: string;
    link?: string;
    copy?: any;
  }[];
}

const ShareLinksView: React.FC<media> = media => {
  return (
    <>
      <div className="postLanding-share__link-container">
        <div>
          <p
            style={{ textAlign: 'center' }}
            className="postLanding-share__links-title"
          >
            Share this retrospective!
          </p>
        </div>
        <div className="postLanding-share__links">
          {media.accounts.map(profile => (
            <a
              className={'postLanding-share__' + profile.type}
              href={profile.copy ? undefined : profile.link}
              key={profile.type}
              target="__blank"
              rel="noopener noreferrer"
            >
              <img
                src={
                  'https://icongr.am/simple/' +
                  profile.type +
                  '.svg?size=' +
                  '64' +
                  '&color=' +
                  '#ffffff' +
                  '+=&colored=true'
                }
                alt={profile.type}
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShareLinksView;
