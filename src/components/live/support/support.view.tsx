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
        answer: "Ask team about this."
    }, 
    {
        question: "How many people can be on my team?", 
        answer: "You and 4 others."
    }, 
    {
        question: "What are the rules?", 
        answer: "redirect them to rules?"
    }, 
    {
        question: "What if I don't know how to code.", 
        answer: "Beep boop beep. There is no need!"
    }, 
    {
        question: "How can I get a mentor?", 
        answer: "Good question. Answer this later"
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