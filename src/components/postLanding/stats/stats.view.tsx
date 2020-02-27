import React from 'react';
import PostLandingStatsTreeView from './tree/tree.view';
import PostLandingStatsBoxView from './box/box.view';

let stats = [
    {
      category: 'attendees',
      stat: '500+',
    },
    {
      category: 'first time hackers',
      stat: '47%',
    },
    {
      category: 'projects',
      stat: '60+',
    },
    {
      category: '$ in prizes',
      stat: '22,000+',
    },
  ];

const PostLandingStatsView: React.FC = () => {
    return(
        <>
            <div className="stats__container">
                <span className="stats__title">2020 Success Stats</span>
                <PostLandingStatsTreeView />
                <PostLandingStatsBoxView stats={stats} />
            </div>
        </>
    );
}

export default PostLandingStatsView;