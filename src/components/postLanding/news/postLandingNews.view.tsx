import React from 'react';
import NewsBackdropView from './backdrop/NewsBackdrop.view';
import NewsCardView from './card/NewsCard.view';

const NewsLinks = [
  {
    title: "Programmers' Paradise",
    source: 'City on a Hill Press',
    url: 'https://www.cityonahillpress.com/2020/01/24/programmers-paradise/',
    description:
      'Friday evening witnessed a legion of 450 coders, hackers, programmers, engineers and techies amass into an unkempt column marching through Stevenson College. Equipped with paper bowls filled with pizza in one hand and laptops in the other, teams of experienced and novice tech lovers from UC Santa Cruz, community colleges and even middle schools…',
    thumb: 'chp',
  },
  {
    title: 'CruzHacks 2020 Students Defining a Future of Impactful Innovation',
    source: 'Santa Cruz Works',
    url:
      'https://www.santacruzworks.org/news/cruzhacks-2020-students-defining-a-future-of-impactful-innovation',
    description:
      'After an exciting weekend of collaboration and innovation, CruzHacks 2020 was a great success. Revealing the positive power of tech, diverse and passionate individuals mobilized their coding skills to solve real problems. Reflections by Jennifer Dutra / CruzHacks 2020 Co-President: Some may be surprised to know that while CruzHacks is only a…',
    thumb: 'scw',
  },
];

const PostLandingNewsView: React.FC = () => {
  return (
    <>
      <div className="postLanding-news__container">
        <div className="postLanding-news__backdrop-container">
          <NewsBackdropView />
        </div>
        <div className="postLanding-news__title-container">
          <p className="postLanding-news__title">CruzHacks in the News</p>
        </div>
        <NewsCardView links={NewsLinks} />
      </div>
    </>
  );
};

export default PostLandingNewsView;
