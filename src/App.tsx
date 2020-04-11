import React from 'react';

import Routes from '~/routes';

export default function App(): React.FC {
  const isSigned = false;

  return <Routes isSigned={isSigned} />;
}
