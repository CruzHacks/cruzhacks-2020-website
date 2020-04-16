import React from 'react';

let stats = [
  {
    title: 'Hackers of All Ages',
    text:
      'Of the roughly 450 attendees who participated, 81% were UCSC students while the rest hailed from outside the university. This event not only garnered interest across worldwide universities, but also drew people of all ages. High-schoolers, undergraduates, graduates and lifelong learners from all around the world (including one team of middle-schoolers!) came out to participate!',
  },
  {
    title: "Inclusivity is CruzHack's Goal",
    text:
      'CruzHacks brings together a diverse and inclusive group to develop innovative solutions and solve real world challenges; we take pride in expanding diversity within the tech industry by providing opportunities for underrepresented communities, and encouraging all attendees to chart new paths with tech.',
  },
];

const PostLandingInfoView: React.FC = () => {
  return (
    <>
      <div className="post-landing-info__container">
        {stats.map((stat) => (
          <div key={stat.title} className="post-landing-info__stat-container">
            <div className="post-landing-info__title-container">
              <span className="post-landing-info__title">{stat.title}</span>
            </div>
            <div className="post-landing-info__text-container">
              <span className="post-landing-info__text">{stat.text}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostLandingInfoView;
