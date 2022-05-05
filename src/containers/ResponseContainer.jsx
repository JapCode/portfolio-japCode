import { useEffect, useState } from 'react';
import ResponseContact from './ResponseContact';
import ResponseError from './ResponseError';

function ResponseContainer(prop) {
  const { onClose, response } = prop;
  const [newResponse, setNewResponse] = useState(null);
  useEffect(() => {
    if (response === 200) {
      setNewResponse(true);
    } else {
      setNewResponse(false);
    }
    return () => {
      setNewResponse(null);
    };
  }, [response]);
  return (
    <>
      {newResponse ? (
        <ResponseContact onClose={onClose} />
      ) : (
        <ResponseError onClose={onClose} />
      )}
      ;
    </>
  );
}
export default ResponseContainer;
