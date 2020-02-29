import React from 'react';
import WinnersBoxView from './box/box.view';

let winners = [
    {
        projectTitle: "TaileredChef",
        projectDescription: "An app that creates tailored-made meal recommendations for young professionals to achieve nutritional goals, develop culinary mastery, and live healthier and more sustainable lives.",
        category: "Health Hacks",
        listOfWinners: [
            {
                name: "Timothy Nguyen",
                linkedin: "https://www.linkedin.com/in/timothy-nguyen-cs/"
            },
            {
                name: "Austin Ha",
                linkedin: "https://www.linkedin.com/in/austin-ha-2885b016b/"
            },
            {
                name: "Zachary Boyd",
                linkedin: "https://www.linkedin.com/in/zackboydt/"
            },
            {
                name: "Leena Elzeiny",
                linkedin: "https://www.linkedin.com/in/leena-elzeiny-a706a4143/"
            },
            {
                name: "Noel Gomez",
                linkedin: "https://www.linkedin.com/in/noel-gomez/"
            }
        ]
    },
    {
        projectTitle: "Transparency Project", 
        projectDescription: "The Transparency Project facilitates the understanding of our political process through interactive data visualization. By aggregating data from social media platforms, search engines, and ad...",
        category: "Justice Hacks",
        listOfWinners: [
            {
                name: "Oasys Okubu",
                linkedin: "https://www.linkedin.com/in/oasysokubo/"
            },
            {
                name: "Garrett Leising",
                linkedin: "https://www.linkedin.com/in/garrett-leising-501425159/"
            },
            {
                name: "Julian Lehrer",
                linkedin: "https://www.linkedin.com/in/julian-lehrer1/"
            },
            {
                name: "Anders Poirel",
                linkedin: "https://www.linkedin.com/in/anders-p-732595160/"
            },
            {
                name: "Sean Breckenridge",
                linkedin: "https://www.linkedin.com/in/sean-breckenridge/"
            }
        ]
    },
    {
        projectTitle: "InSight",
        projectDescription: "Monitors and records your mental health through emotion recongnition using Machine Learning.",
        category: "Health Hacks",
        listOfWinners: [
            {
                name: "Neal Chokshi",
                linkedin: "https://www.linkedin.com/in/neal-chokshi-73b00a192/"
            },
            {
                name: "Vela Rajesh",
                linkedin: "https://www.linkedin.com/in/singaravelavan-rajesh/"
            },
            {
                name: "Neville Hiramanek",
                linkedin: "https://www.linkedin.com/in/neville-hiramanek-a78754191/"
            },
            {
                name: "Jaidev Gopakumar",
                linkedin: "https://www.linkedin.com/in/jaidev-gopakumar-86a004195/"
            }
        ]
    }
]

const PostLandingWinnersView: React.FC = () => {
    return(
        <>
            <div className="post-landing-winner__container">
                <WinnersBoxView BoxProps={winners} />
            </div>
        </>
    );
};

export default PostLandingWinnersView;