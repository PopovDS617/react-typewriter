import React, { useEffect, useState } from 'react';

const TypeWriter = ({ text }) => {
  const [textDiplay, setTextDisplay] = useState('');

  useEffect(() => {
    setTextDisplay('');
  }, [text]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTextDisplay(text.slice(0, textDiplay.length + 1));
    }, 220);

    return () => clearTimeout(timeout);

    // }
  }, [textDiplay, text]);

  return (
    <div>
      <p>{textDiplay}</p>
    </div>
  );
};

export default TypeWriter;
