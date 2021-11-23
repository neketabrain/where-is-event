import { ReactNode } from 'react';

import { withActionSheet } from './with-action-sheet';
import { withNavigation } from './with-navigation';
import { withSafeArea } from './with-safe-area';

function withProviders(component: () => ReactNode) {
  return withSafeArea(withActionSheet(withNavigation(component)));
}

export { withProviders };
