import { ReactNode } from 'react';

import { withActionSheet } from './with-action-sheet';
import { withNavigation } from './with-navigation';
import { withSafeArea } from './with-safe-area';

export const withProviders = (component: () => ReactNode) => withSafeArea(withActionSheet(withNavigation(component)));
