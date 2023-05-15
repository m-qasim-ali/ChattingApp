import React from 'react';
const Cat = React.lazy(() => import('../../components/Cat'));

const GeneralApp = () => {
  return (
    <>
      <React.Suspense fallback={'Loading...'}>
        <Cat />
      </React.Suspense>
    </>
  );
};

export default GeneralApp;
