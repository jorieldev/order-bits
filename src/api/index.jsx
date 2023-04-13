const api = {
  orders: {
    fetch: async (order) => {
      const resp = await fetch(`${import.meta.env.VITE_API_KEY}${order}`);
      const data = await resp.text();

      return JSON.parse(data)[0];
    },
  },
};

export default api;
