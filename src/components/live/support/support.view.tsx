import React from 'react';
import Navbar from '../navbar/navbar.view';
import Backdrop from '../background/backdrop.view';
import SlackCardView from './slack/slack.view';
import MLHCodeOfConductCardView from './mlh/mlhcoc.view';
import EmergencyContactCardView from './emergency/emergency.view';
import FAQCardView from './faq/faq.view';

const FAQQandA = [
    {
        question: "Are we allowed to build on past projects?",
        answer: "Project ideas for CruzHacks 2020 may be preconceived or spontaneously created at the event."
    }, 
    {
        question: "How many people can be on my team?", 
        answer: "You and up to 4 others."
    }, 
    {
        question: "What are the rules?", 
        answer: (
            <span>
                As a Major League Hacking member event, we follow Major League Hacking’s{' '}
                 <a
                    target="__blank"
                    rel="noreferrer"
                    href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                >    
                    Code of Conduct.
                </a>{' '}
            </span>
        )
    }, 
    {
        question: "What if I don't know how to code.", 
        answer: "Beep boop beep. There is no need! This event is open to all!"
    }, 
    {
        question: "How can I get a mentor?", 
        answer: "Come see us at the help desk and we will connect you with one of our many mentors!"
    }, 
    {
        question: "I don't see my question here.",
        answer: "Please message us on Slack for other question!"
    }
]

const SupportView: React.FC = () => {
    return (
        <div className="support__container">
            <Backdrop />
            <Navbar />
            <div className="support__title">
                Support and FAQ
            </div>
            <SlackCardView />
            <FAQCardView qAndA={FAQQandA}/>
            <MLHCodeOfConductCardView />
            <EmergencyContactCardView />
        </div>
    );
};

export default SupportView; 