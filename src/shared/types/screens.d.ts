declare type BaseStackParamList = {
  Auth: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ResetPassword: undefined;
  PlaceInfo: { placeId: string };
  EventInfo: { eventId: string };
  Profile: undefined;
  Settings: undefined;
  Favourites: undefined;
  MyPlaces: undefined;
  MyEvents: undefined;
  EditEmail: undefined;
  EditPassword: undefined;
};

declare type RootStackParamList = BaseStackParamList & {
  Home: undefined;
  Places: undefined;
  Events: undefined;
  Personal: undefined;
};
