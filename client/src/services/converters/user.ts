import User from 'models/User';

export const convertServerUser = (serverUser: any) => {
  const user = new User(
    serverUser.user_id || (serverUser as any).sub,
    serverUser.email
  );
  user.name = serverUser.name;
  user.picture = serverUser.picture;
  return user;
};
