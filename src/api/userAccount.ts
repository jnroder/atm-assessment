export const userAccount = {
  get: async (pin: string) => {
    const response = await fetch(`/api/user/${pin}`);
    return response.json();
  }
};
