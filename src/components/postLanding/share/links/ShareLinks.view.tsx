import React from 'react';

interface media {
  [index: string]: {
    type: string;
    link?: string;
    copy?: any;
  }[];
}

const ShareLinksView: React.FC<media> = media => {
  const tooltip = (e, message, cl, link) => {
    let el = document.createElement('div');
    el.classList.add('tooltip');
    while (cl && !e.className.includes(cl)) e = e.parentElement;
    el.innerHTML = message;
    if (
      [...e.children].reduce(
        (open, el) => [...el.classList].includes('tooltip') && (open = true),
        false
      )
    )
      return;
    e.appendChild(el);

    setTimeout(() => el.classList.add('__invisible'), 2000);
    setTimeout(() => e.removeChild(el), 2200);
    if (link) {
      setTimeout(
        () =>
          Object.assign(
            document.body.appendChild(document.createElement('a')),
            { href: link }
          ).click(),
        1000
      );
    }
  };
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
              onClick={e => {
                if (profile.copy) {
                  profile.copy();
                  tooltip(
                    e.target,
                    `Copied!`,
                    `postLanding-share__links`,
                    profile.link
                  );
                }
              }}
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
