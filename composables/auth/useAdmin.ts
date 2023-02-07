export const useAdmin = () => {
  const authUser = useAuthUser()

  return computed(() => {
    if (!authUser.value)
      return false

    return authUser.value.access_level === 0;
  })
}
