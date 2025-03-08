import { getUsersApi } from '@/api/user'

export const getUsers = async () => {
  const users = (await getUsersApi()).data
  return users
}
