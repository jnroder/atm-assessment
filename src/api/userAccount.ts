export const userAccount = {
  get: async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.json();
  },
};
