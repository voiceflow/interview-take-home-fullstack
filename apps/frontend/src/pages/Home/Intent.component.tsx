import React from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getIntentById, updateIntent } from 'store/intent.slice';
import { addUtterance, deleteUtterance, updateUtterance, utteranceByIntentID } from 'store/utterance.slice';

export const Intent: React.FC<{ intentID: string; assistantID: string }> = ({ intentID, assistantID }) => {
  const intent = useAppSelector(getIntentById)(intentID, assistantID);
  const utterances = useAppSelector(utteranceByIntentID)(intentID, assistantID);

  const [utterancesCollapsed, setUtterancesCollapsed] = React.useState(true);

  const dispatch = useAppDispatch();

  return (
    <div className="intent-container">
      <p>
        <label>
          name:{' '}
          <input
            value={intent.name}
            onChange={(e) => dispatch(updateIntent({ id: intent.id, assistantID: intent.assistantID, name: e.target.value }))}
          />
        </label>
      </p>
      <p>
        <label>
          description:{' '}
          <input
            value={intent.description}
            onChange={(e) => dispatch(updateIntent({ id: intent.id, assistantID: intent.assistantID, description: e.target.value }))}
          />
        </label>
      </p>
      <div>
        <label>
          utterances: <button onClick={() => setUtterancesCollapsed(!utterancesCollapsed)}>{utterancesCollapsed ? 'Show' : 'Hide'}</button>
        </label>
        <ol style={{ display: utterancesCollapsed ? 'none' : 'block' }}>
          {utterances
            .filter((utterance) => utterance.intentID === intent.id && utterance.assistantID === intent.assistantID)
            .map((utterance) => (
              <li style={{ display: 'flex' }}>
                <input
                  value={utterance.text}
                  onChange={(e) =>
                    dispatch(
                      updateUtterance({ id: utterance.id, assistantID: utterance.assistantID, intentID: utterance.intentID, text: e.target.value })
                    )
                  }
                />
                <button onClick={() => dispatch(deleteUtterance(utterance))}>Delete</button>
              </li>
            ))}
          <button
            onClick={() =>
              dispatch(
                addUtterance({
                  assistantID: intent.assistantID,
                  intentID: intent.id,
                  text: '',
                })
              )
            }
          >
            Add Utterance
          </button>
        </ol>
      </div>
    </div>
  );
};
