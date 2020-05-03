import React, { useState } from 'react';
import SubscriptionService from './services/subscribers';
import Card from './components/Card';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState({
    firstName: 'randomfirstname',
    lastName: 'randomLastname',
  });

  const handleSubscribe = (subscriptionType) => {
    if (!currentUser.subscription) {
      const newSubscriber = {
        ...currentUser,
        subscription: subscriptionType,
        date: new Date(),
      };

      SubscriptionService.create(newSubscriber)
        .then((subscriber) => {
          setCurrentUser({
            ...currentUser,
            subscription: subscriber.subscription,
          });
          window.alert(
            `Congratulations ${currentUser.firstName}. You are now a ${subscriptionType} subscriber`
          );
        })
        .catch((error) => {
          window.alert(
            'An error occured on the server. Please try again later'
          );
        });
    } else {
      window.alert(
        'Sorry, You have a subscription plan already. Please contact us to change it'
      );
    }
  };

  return (
    <section className='pricing-table'>
      <Card
        subscription={'Bronze'}
        price={20}
        handleSubscription={handleSubscribe}
      />
      <Card
        subscription={'Gold'}
        price={100}
        handleSubscription={handleSubscribe}
      />
      <Card
        subscription={'Silver'}
        price={50}
        handleSubscription={handleSubscribe}
      />
    </section>
  );
}

export default App;
