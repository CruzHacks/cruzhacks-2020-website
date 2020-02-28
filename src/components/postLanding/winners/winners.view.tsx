import React from 'react';
import WinnersBoxView from './box/box.view';

interface BoxProps {
    projectTitle: string;
    projectDescription: string;
    category: string;
    listOfWinners: {
        name: string;
        linkedin: string;
    }[];
};

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
                linkedin: "/#"
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