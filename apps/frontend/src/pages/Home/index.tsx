import React from 'react';
import { Loading } from 'shared';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { allIntents, fetchIntents } from 'store/intent.slice';
import { allUtterances, fetchUtterances } from 'store/utterance.slice';

import { Intent } from './Intent.component';

const HomePage = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    (async () => {
      await dispatch(fetchIntents());
      await dispatch(fetchUtterances());
      setIsLoading(false);
    })();
  }, []);

  const intents = useAppSelector(allIntents);

  return (
    <div className="root">
      <div className="header">
        <h1>Intent Content Management System</h1>
      </div>
      {isLoading ? <Loading /> : intents.map((intent, idx) => <Intent key={idx} intentID={intent.id} assistantID={intent.assistantID} />)}
    </div>
  );
};

export default HomePage;
