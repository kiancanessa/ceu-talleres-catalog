import React from 'react';

const CATEGORY_COLORS = {
  desarrollo: 'bg-blue-100 text-blue-800',
  diseno: 'bg-purple-100 text-purple-800',
  data: 'bg-green-100 text-green-800',
};

const CATEGORY_LABELS = {
  desarrollo: 'Desarrollo',
  diseno: 'Diseño',
  data: 'Data',
};

const TallerCard = ({ taller, onDelete }) => {
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const getCategoryColor = (categoria) => {
    return CATEGORY_COLORS[categoria] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryLabel = (categoria) => {
    return CATEGORY_LABELS[categoria] || categoria;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-800">{taller.nombre}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(taller.categoria)}`}>
          {getCategoryLabel(taller.categoria)}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4">{taller.descripcion}</p>
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          <svg className="inline w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {formatDate(taller.fecha_inicio)}
        </div>
        
        {onDelete && (
          <button
            onClick={() => onDelete(taller.id)}
            className="text-red-500 hover:text-red-700 transition-colors"
            title="Eliminar taller"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default TallerCard;