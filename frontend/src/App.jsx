import React, { useState, useEffect } from 'react';
import TallerCard from './components/TallerCard';
import TallerForm from './components/TallerForm';
import { talleresAPI } from './services/api';

const CATEGORIAS = {
  todas: 'Todas',
  desarrollo: 'Desarrollo',
  diseno: 'Diseño',
  data: 'Data'
};

function App() {
  const [talleres, setTalleres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [filtroCategoria, setFiltroCategoria] = useState('todas');

  useEffect(() => {
    fetchTalleres();
  }, []);

  const fetchTalleres = async () => {
    try {
      setLoading(true);
      const data = await talleresAPI.getAll();
      setTalleres(data.results || data);
      setError(null);
    } catch (err) {
      setError('Error al cargar los talleres. Verifica que el backend esté funcionando.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (tallerData) => {
    try {
      await talleresAPI.create(tallerData);
      await fetchTalleres();
      setShowForm(false);
      alert('✅ Taller creado exitosamente');
    } catch (err) {
      console.error('Error al crear taller:', err);
      alert('❌ Error al crear el taller: ' + (err.response?.data?.fecha_inicio?.[0] || err.message));
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este taller?')) {
      return;
    }
    
    try {
      await talleresAPI.delete(id);
      await fetchTalleres();
      alert('✅ Taller eliminado');
    } catch (err) {
      console.error('Error al eliminar:', err);
      alert('❌ Error al eliminar el taller');
    }
  };

  const talleresFiltrados = filtroCategoria === 'todas' 
    ? talleres 
    : talleres.filter(t => t.categoria === filtroCategoria);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando talleres...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">CEU</h1>
              <p className="text-gray-600 mt-1">Catálogo de Talleres</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              {showForm ? 'Ocultar Formulario' : 'Nuevo Taller'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {showForm && (
          <TallerForm 
            onSubmit={handleCreate}
            onCancel={() => setShowForm(false)}
          />
        )}

        <div className="mb-6 flex items-center gap-4">
          <label className="text-gray-700 font-medium">Filtrar por categoría:</label>
          <div className="flex gap-2">
            {Object.keys(CATEGORIAS).map(cat => (
              <button
                key={cat}
                onClick={() => setFiltroCategoria(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filtroCategoria === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {CATEGORIAS[cat]}
              </button>
            ))}
          </div>
          <span className="text-gray-500">
            ({talleresFiltrados.length} taller{talleresFiltrados.length !== 1 ? 'es' : ''})
          </span>
        </div>

        {talleresFiltrados.length === 0 ? (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No hay talleres</h3>
            <p className="mt-1 text-gray-500">Comienza creando un nuevo taller</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {talleresFiltrados.map(taller => (
              <TallerCard 
                key={taller.id} 
                taller={taller}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;