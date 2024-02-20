import React from 'react';
import { Loading } from 'shared';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { allIntents, fetchIntents } from 'store/intent.slice';
import { allUtterances, fetchUtterances } from 'store/utterance.slice';

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
  const utterances = useAppSelector(allUtterances);

  return (
    <div className="root">
      <h1>Intent Content Management System</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {intents?.length
            ? intents?.map((intent, idx) => (
                <div className="intent-container" key={idx}>
                  <p>
                    <label>
                      name: <input value={intent.name} />
                    </label>
                  </p>
                  <p>
                    <label>
                      description: <input value={intent.description} />
                    </label>
                  </p>
                  <div>
                    <p>utterances:</p>
                    <ol>
                      {utterances
                        .filter((utterance) => utterance.intentID === intent.id)
                        .map((utterance) => (
                          <li>{utterance.text}</li>
                        ))}
                    </ol>
                  </div>
                </div>
              ))
            : 'Unable to fetch intents'}
        </>
      )}
    </div>
  );
};

export default HomePage;
