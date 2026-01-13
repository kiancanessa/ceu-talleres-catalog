# 🎓 CEU  - Catálogo de Talleres 

Sistema de gestión de talleres desarrollado con Django REST Framework y React.

![CEU](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Python](https://img.shields.io/badge/Python-3.12-green.svg)
![Django](https://img.shields.io/badge/Django-5.0-green.svg)
![React](https://img.shields.io/badge/React-18.3-blue.svg)

## 📋 Descripción

Aplicación web full-stack para registrar y visualizar talleres tecnológicos del CEU Centro de Especialización. Permite crear, listar y filtrar talleres por categoría con una interfaz moderna y responsive.

## ✨ Características

- ✅ **CRUD completo** de talleres
- 🎨 **Interfaz moderna** con Tailwind CSS
- 🔍 **Filtros** por categoría (Desarrollo, Diseño, Data)
- ✔️ **Validaciones** frontend y backend
- 📱 **Responsive** design
- 🗑️ **Eliminación** de talleres
- 🐳 **Docker** ready

## 🛠️ Stack Tecnológico

### Backend
- Python 3.12
- Django 5.0
- Django REST Framework
- SQLite (desarrollo) / PostgreSQL (producción)

### Frontend
- React 18.3
- Vite
- Tailwind CSS 3.4
- Axios

## 📦 Estructura del Proyecto
```
ceu-talleres-catalog/
├── backend/
│   ├── config/          # Configuración Django
│   ├── talleres/        # App principal
│   │   ├── models.py    # Modelo Taller
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── urls.py
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/  # TallerCard, TallerForm
│   │   ├── services/    # API client
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── docker-compose.yml
```

## 🚀 Instalación y Uso

### Opción 1: Desarrollo Local

#### Backend
```bash
# Crear entorno virtual
cd backend
python -m venv venv

# Activar entorno virtual
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt

# Migrar base de datos
python manage.py migrate

# Crear superusuario
python manage.py createsuperuser

# Iniciar servidor
python manage.py runserver
```

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

**Acceder a:**
- Frontend: http://localhost:5173
- Backend API: http://127.0.0.1:8000/api/talleres/
- Admin Django: http://127.0.0.1:8000/admin/

### Opción 2: Docker
```bash
# Construir e iniciar contenedores
docker-compose up --build

# Acceder a la aplicación
# Frontend: http://localhost:5173
# Backend: http://localhost:8000
```

## 📝 API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/talleres/` | Listar todos los talleres |
| POST | `/api/talleres/` | Crear nuevo taller |
| GET | `/api/talleres/:id/` | Obtener taller específico |
| PUT | `/api/talleres/:id/` | Actualizar taller |
| DELETE | `/api/talleres/:id/` | Eliminar taller |

### Ejemplo de Request (POST)
```json
{
  "nombre": "Introducción a Python",
  "descripcion": "Taller para juniors en Python",
  "fecha_inicio": "2026-02-05T11:30:00Z",
  "categoria": "desarrollo"
}
```

## 🎨 Capturas de Pantalla

### Vista Principal
![Vista Principal](docs/screenshots/main.png)

### Formulario de Creación
![Formulario](docs/screenshots/form.png)

## 🧪 Testing
```bash
# Backend
cd backend
python manage.py test

# Frontend
cd frontend
npm test
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'feat: add amazing feature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Convención de Commits

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bugs
- `docs:` Documentación
- `style:` Formato, punto y coma, etc
- `refactor:` Refactorización de código
- `test:` Tests
- `chore:` Mantenimiento

## 👤 Autor

**Tu Nombre**
- GitHub: [@kiancanessa](https://github.com/kiancanessa)
- LinkedIn: [Tu Perfil](https://www.linkedin.com/in/kian-saavedra-canessa-76737b2b7)

## 🙏 Agradecimientos

- CEU Centro de Especialización
- Comunidad Django
- Comunidad React

---


⭐️ Si este proyecto te fue útil, considera darle una estrella en GitHub!

