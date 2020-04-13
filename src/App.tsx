import React from 'react';
import { useSelector } from 'react-redux';

import Routes from '~/routes';

export default function App(): React.FC {
  const isSigned = useSelector((state) => state.auth.signed);

  return <Routes isSigned={isSigned} />;
}
