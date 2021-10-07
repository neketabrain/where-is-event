import { ReactNode } from 'react';

import { withNavigation } from './with-navigation';
import { withSafeArea } from './with-safe-area';

export const withProviders = (component: () => ReactNode) => withSafeArea(withNavigation(component));
