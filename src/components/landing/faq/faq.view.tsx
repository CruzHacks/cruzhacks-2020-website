import React from 'react';
import FAQBoxView from './container/faq-container.view';

const faqs = [
  {
    question: 'What is a hackathon?',
    answer:
      'A hackathon is a weekend-long event where you can build out your ideas, network, and show off your skills. This 3-day event consists of forming teams, choosing an idea, building it out, and showing it off at the end. Hundreds of students, sponsors, mentors, and judges gather together to push the limits of what you can build, only limited by your imagination.',
  },
  {
    question: 'Who can participate?',
    answer:
      'Everyone can! This event is open to coders, designers, artists, project managers, and anyone else who wants to create! No prior coding or technical experience is necessary,​ ​and​ ​everyone​ ​is​ ​welcome​ ​to​ ​participate​ ​in​ ​the​ ​hackathon!',
  },
  {
    question: 'What are the rules?',
    answer:
      'As a Major League Hacking member event, we follow Major League Hacking’s Code of Conduct which ensures all attendees to CruzHacks are respectful regardless of who you are and where you come from. Additionally, to be considered for an award, you must only submit a project that your team wrote and worked on during the hackathon & agree to our 2018 Participation Agreement.',
  },
  {
    question: 'Is it completely free?',
    answer:
      'Yes! This event is completely free for everyone! We will not be charging an admission fee for this event. We will cover all costs (including all meals) for the entire duration of the event. Note: CruzHacks 2020 may not cover travel​ ​costs.',
  },
  {
    question: 'What should I bring?',
    answer:
      'Some essential things to bring include a laptop (with charger), an empty bag for swag, and a change of clothes if you plan on spending the night!',
  },
  {
    question: "I'd like to help out!",
    answer:
      "If you're interested in volunteering for this year's hackathon, sign up when applications open!",
  },
  {
    question: 'How can I be a sponsor?',
    answer: (
      <span>
        Please contact Radhika, our sponsorship lead, at{' '}
        <a href="mailto:sponsor@cruzhacks.com">sponsor@cruzhacks.com</a> and we
        can discuss the best way for your organization to get involved!
      </span>
    ),
  },
  {
    question: 'How many people can I have on my team?',
    answer: 'Each team can have a maximum of five people.',
  },
  {
    question: 'How can I become a mentor or a judge?',
    answer:
      'We would love to have you as a mentor or judge. Sign up when applications open!',
  },

  {
    question: 'How can I keep up to date on Cruzhacks 2020 news?',
    answer:
      'Subscribe to our mailing list for updates! Follow us on Instagram or Facebook for details regarding the event!',
  },
  {
    question: "I don't see my question here.",
    answer: (
      <span>
        Email us your question at&nbsp;
        <a href="mailto:contact@cruzhacks.com">contact@cruzhacks.com!</a>
      </span>
    ),
  },
];

const FAQView: React.FC = () => {
  return (
    <div className="faq__container">
      <FAQBoxView qAndA={faqs} />
    </div>
  );
};

export default FAQView;
