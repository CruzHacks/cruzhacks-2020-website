import React from 'react';
import EmailSubscriptionInput from '../../../controls/email-subscription-input';

const HeroSubscribeToEmailList: React.FC = () => {
  return (
    <EmailSubscriptionInput
      placeholder="email"
      value=""
      buttonText="SUBSCRIBE"
      containerClass="hero-subscribe-to-email-list-container"
    ></EmailSubscriptionInput>
  );
};

export default HeroSubscribeToEmailList;
