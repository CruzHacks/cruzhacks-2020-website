import React from 'react';

let stats = [
    {
        title: "Hackers from Across the Country",
        text: "Of the roughly 600 attendees who participated, 81% were UCSC students while the rest hailed from outside the university. The event not only garnered interest within the local community, but also established its credibility outside the circles of Santa Cruz. Hackers from other UC schools, high schoolers, and college students from all around the U.S. (including one team from the University of Waterloo in Canada!) came out to participate!"
    },
    {
        title: "Inclusivity is CruzHack's Goal",
        text: "CruzHacks brings together a diverse and inclusive group of students to develop innovative solutions and solve real world challenges; we take pride in organizing our event to expand future diversity within the tech industry by prioritizing opportunities for underrepresented communities, and by encouraging such attendees to chart new paths for their stories within tech."
    }
] 

const PostLandingInfoView: React.FC = () => {
    return(
        <>
            <div className="post-landing-info__container">
                { stats.map(stat => (
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
}

export default PostLandingInfoView;