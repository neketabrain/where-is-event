import { Viewer } from 'shared/api/viewer';

function getViewerInitials(viewer: Viewer) {
  return `${viewer.firstName[0]}${viewer.lastName[0]}`;
}

export { getViewerInitials };
