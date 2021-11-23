// TODO: Изменить в соответствии с бэкендом
interface Viewer {
  id: number;
  firstName: string;
  lastName: string;
  gender?: string;
  birthdate?: string;
  email?: string;
  avatar?: string;
  isOwner?: boolean;
}

export type { Viewer };
