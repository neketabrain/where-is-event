import { createEvent, createStore } from 'effector';
import { useStore } from 'effector-react';

import { Viewer } from 'shared/api/viewer';

const setViewer = createEvent<Viewer>();
const updateViewer = createEvent<Viewer>();
const resetViewer = createEvent();

const $viewer = createStore<Viewer | null>(null)
  .on(setViewer, (_, viewer) => viewer)
  .on(updateViewer, (state, viewer) => ({ ...state, ...viewer }))
  .reset(resetViewer);

function useViewer() {
  return useStore($viewer);
}

const events = {
  setViewer,
  updateViewer,
  resetViewer,
};

const selectors = {
  useViewer,
};

export { events, selectors };
