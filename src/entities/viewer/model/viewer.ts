import { createEvent, createStore } from 'effector';
import { useStore } from 'effector-react';

import { Viewer } from 'shared/api/viewer';

const setViewer = createEvent<Viewer>();
const updateViewer = createEvent<Viewer>();
const resetViewer = createEvent();

const $viewer = createStore<Viewer | null>({
  firstName: 'Никита',
  lastName: 'Крутой',
  id: 1,
  // avatar:
  //   'https://cdn.vox-cdn.com/thumbor/JgCPp2BBxETY596wCp50ccosCfE=/0x0:2370x1574/1200x800/filters:focal(996x598:1374x976)/cdn.vox-cdn.com/uploads/chorus_image/image/68870438/Screen_Shot_2020_07_21_at_9.38.25_AM.0.png',
})
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
