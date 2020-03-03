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
          <span className="postLanding-share__links-title">
            Share this retrospective!
          </span>
        </div>
        <div className="postLanding-share__links">
          {media.accounts.map(profile => (
            <a
              className={'postLanding-share__' + profile.type}
              href={profile.copy ? undefined : profile.link}
              key={profile.type}
              target="__blank"
              onClick={e => { if (profile.copy) {profile.copy()}}}
              rel="noopener noreferrer"
            >
              <img
                src={require('../../../../assets/postLanding/shareButtons/' +
                  profile.type +
                  '.svg')}
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
