import React from 'react';
import EmailSubscriptionInput from '../../../controls/email-subscription-input';

const HeroSubscribeToEmailList: React.FC = () => {
  return (
    <EmailSubscriptionInput
      placeholder="Enter email for updates!"
      value=""
      isSending={false}
      buttonText="SUBSCRIBE"
      containerClass="hero-subscribe-to-email-list-container"
    ></EmailSubscriptionInput>
  );
};

export default HeroSubscribeToEmailList;
