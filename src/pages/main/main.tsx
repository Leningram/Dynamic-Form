import React, { useState } from 'react';
import Survey from '@/pages/survey/survey';
import Files from '@/pages/files/files';

const Main = () => {
  const [surveySent, setSurveySent] = useState(false);

  return (
    <div>
      {surveySent && <Files />}
      {!surveySent && <Survey onFinish={() => setSurveySent(true)} />}
    </div>
  );
};

export default Main;
