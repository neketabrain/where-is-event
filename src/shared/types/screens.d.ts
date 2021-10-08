declare type BaseStackParamList = {
  Auth: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ResetPassword: undefined;
  PlaceInfo: { placeId: string };
  EventInfo: { eventId: string };
};

declare type RootStackParamList = BaseStackParamList & {
  Home: undefined;
  Places: undefined;
  Events: undefined;
  Personal: undefined;
};
