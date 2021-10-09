import { createEvent, createStore } from 'effector';
import { useStore } from 'effector-react';

type ViewerStore = {
  isAuthorized: boolean;
  // TODO: Указать тип из shared/api
  viewer: Object | null;
};

const setAuthorized = createEvent<boolean>();

// TODO: Указать тип из shared/api
const setViewer = createEvent<Object>();

export const $viewer = createStore<ViewerStore>({ isAuthorized: false, viewer: null })
  .on(setViewer, (state, viewer) => ({ ...state, viewer }))
  .on(setAuthorized, (state, isAuthorized) => ({
    ...state,
    isAuthorized,
  }));

const useViewer = () => useStore($viewer).viewer;
const useAuthorized = () => useStore($viewer).isAuthorized;

export const events = {
  setViewer,
  setAuthorized,
};

export const selectors = {
  useViewer,
  useAuthorized,
};
