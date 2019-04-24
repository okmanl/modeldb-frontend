import User, { CurrentUser } from 'models/User';

export const convertServerUser = (serverUser: any) => {
  const user = new User(
    serverUser.user_id || (serverUser as any).sub,
    serverUser.email
  );
  user.name = serverUser.name;
  user.picture = serverUser.picture;
  return user;
};

export const convertServerCurrentUser = (serverUser: any) => {
  return new CurrentUser({
    id: serverUser.sub,
    email: serverUser.email,
    dateLastLoggedIn: new Date(serverUser.updated_at),
    developerKey: serverUser.developer_key,
    name: serverUser.name,
    picture: serverUser.picture,
  });
};
