import data from "./users.json";
const users = data;

export default function getUserById(userId: string) {
  const user = users.find((user) => {
    return user._id === userId;
  });
  return user;
}
