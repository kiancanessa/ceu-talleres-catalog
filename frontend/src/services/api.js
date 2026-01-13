import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const talleresAPI = {
  // Obtener todos los talleres
  getAll: async () => {
    const response = await api.get('/talleres/');
    return response.data;
  },

  // Crear un nuevo taller
  create: async (taller) => {
    const response = await api.post('/talleres/', taller);
    return response.data;
  },

  // Eliminar un taller (opcional - bonus)
  delete: async (id) => {
    const response = await api.delete(`/talleres/${id}/`);
    return response.data;
  },
};

export default api;