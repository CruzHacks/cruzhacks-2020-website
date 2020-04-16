import React from 'react';

let stats = [
  {
    title: 'Hackers of All Ages',
    text:
      'Of the roughly 450 attendees who participated, 81% were UCSC students while the rest hailed from outside the university. This event not only garnered interest across national universities, but also drew students of all ages. High-schoolers, undergraduates and graduates from all around the U.S. (including one team of middle-schoolers!) came out to participate!',
  },
  {
    title: "Inclusivity is CruzHack's Goal",
    text:
      'CruzHacks brings together a diverse and inclusive group of students to develop innovative solutions and solve real world challenges; we take pride in expanding diversity within the tech industry by prioritizing opportunities for underrepresented communities, and encouraging all attendees to chart new paths for their stories within tech.',
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
