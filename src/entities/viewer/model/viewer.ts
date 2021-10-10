import { createEvent, createStore } from 'effector';
import { useStore } from 'effector-react';

import { Viewer } from 'shared/api/viewer';

const setViewer = createEvent<Viewer>();
const resetViewer = createEvent();

export const $viewer = createStore<Viewer | null>(null)
  .on(setViewer, (_, viewer) => viewer)
  .reset(resetViewer);

const useViewer = () => useStore($viewer);

export const events = {
  setViewer,
  resetViewer,
};

export const selectors = {
  useViewer,
};
