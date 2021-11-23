import React from 'react';

import { Pages } from 'pages';

import { withProviders } from './providers';

function Main(): React.ReactNode {
  return <Pages />;
}

const App = withProviders(Main);

export { App };
