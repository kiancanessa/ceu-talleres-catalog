# 🎓 CEU Talleres - Catálogo de Talleres Tecnológicos

Sistema de gestión de talleres tecnológicos desarrollado con Django REST Framework y React.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Python](https://img.shields.io/badge/Python-3.12-green.svg)
![Django](https://img.shields.io/badge/Django-6.0.1-green.svg)
![React](https://img.shields.io/badge/React-18.3-blue.svg)
![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)

## 📋 Descripción

Aplicación web full-stack para registrar y visualizar talleres tecnológicos del CEU Centro de Especialización. Permite crear, listar, filtrar y eliminar talleres con una interfaz moderna y responsive.

## ✨ Características

- ✅ **CRUD completo** de talleres
- 🎨 **Interfaz moderna** con Tailwind CSS
- 🔍 **Filtros** por categoría (Desarrollo, Diseño, Data)
- ✔️ **Validaciones** frontend y backend
- 📱 **Diseño responsive**
- 🗑️ **Eliminación** con confirmación
- 🐳 **Dockerizado** y listo para desplegar
- 🔐 **Panel de administración** Django

## 🛠️ Stack Tecnológico

### Backend
- Python 3.12
- Django 6.0.1
- Django REST Framework
- CORS Headers
- SQLite

### Frontend
- React 18.3
- Vite 6.0
- Tailwind CSS 3.4
- Axios

### DevOps
- Docker
- Docker Compose

---

## 🚀 Instalación y Ejecución

### 📦 Opción 1: Con Docker

#### Requisitos Previos

1. **Instalar Docker Desktop**:
   - Windows/Mac: https://www.docker.com/products/docker-desktop/
   - Linux: Instala Docker Engine y Docker Compose

2. **Verificar instalación**:
```bash
   docker --version
   docker-compose --version
```

#### Pasos de Instalación

**1. Clonar el repositorio:**
```bash
git clone https://github.com/kiancanessa/ceu-talleres-catalog.git
cd ceu-talleres-catalog
```

**2. Iniciar Docker Desktop**

- Abre Docker Desktop y espera a que el ícono esté verde (Docker corriendo)

**3. Levantar los servicios:**
```bash
docker-compose up --build
```

**Espera entre 2-3 minutos** la primera vez mientras descarga las imágenes y construye los contenedores.

**4. Cuando veas estos mensajes, ¡está listo!** ✅
```
ceu_backend  | Starting development server at http://0.0.0.0:8000/
ceu_frontend | VITE v6.x.x  ready in xxx ms
ceu_frontend | ➜  Local:   http://localhost:5173/
```

**5. Abrir en el navegador:**

- **Aplicación**: http://localhost:5173
- **API Backend**: http://localhost:8000/api/talleres/
- **Admin Django**: http://localhost:8000/admin/

**6. Para detener los servicios:**
```bash
# Presiona Ctrl + C en la terminal
# O ejecuta:
docker-compose down
```

---

### 🔧 Opción 2: Instalación Manual (Sin Docker)

Si prefieres ejecutar sin Docker o tienes problemas con él.

#### Requisitos Previos

- Python 3.12+
- Node.js 18+ y npm
- Git

#### Backend
```bash
# 1. Navegar al backend
cd backend

# 2. Crear entorno virtual
python -m venv venv

# 3. Activar entorno virtual
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# 4. Instalar dependencias
pip install -r requirements.txt

# 5. Aplicar migraciones
python manage.py migrate

# 6. (Opcional) Crear superusuario para el admin
python manage.py createsuperuser

# 7. Iniciar servidor
python manage.py runserver
```

El backend estará en: http://127.0.0.1:8000

#### Frontend

**En otra terminal:**
```bash
# 1. Navegar al frontend
cd frontend

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

El frontend estará en: http://localhost:5173

---

## 📱 Uso de la Aplicación

### Crear un Taller

1. Click en **"Nuevo Taller"**
2. Completa el formulario:
   - **Nombre**: Título del taller
   - **Descripción**: Detalles del contenido
   - **Fecha y Hora**: Cuándo se realizará
   - **Categoría**: Desarrollo, Diseño o Data
3. Click en **"Crear Taller"**

### Filtrar Talleres

- Click en los botones de categoría: **Todas**, **Desarrollo**, **Diseño**, **Data**
- El contador muestra cuántos talleres hay en cada categoría

### Eliminar un Taller

- Click en el ícono de **papelera** 🗑️ en la tarjeta del taller
- Confirma la eliminación

---

## 📝 API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/talleres/` | Listar todos los talleres |
| POST | `/api/talleres/` | Crear nuevo taller |
| GET | `/api/talleres/:id/` | Obtener taller específico |
| PUT | `/api/talleres/:id/` | Actualizar taller completo |
| PATCH | `/api/talleres/:id/` | Actualizar parcialmente |
| DELETE | `/api/talleres/:id/` | Eliminar taller |

### Ejemplo de Request (POST)
```json
{
  "nombre": "Introducción a Python",
  "descripcion": "Taller básico de Python para principiantes",
  "fecha_inicio": "2026-02-05T11:30:00Z",
  "categoria": "desarrollo"
}
```

### Categorías Disponibles

- `desarrollo` - Talleres de programación
- `diseño` - Talleres de diseño
- `data` - Talleres de ciencia de datos
---

## 📦 Estructura del Proyecto
```
ceu-talleres-catalog/
├── backend/
│   ├── config/              # Configuración Django
│   │   ├── settings.py      # Configuración principal
│   │   ├── urls.py          # URLs del proyecto
│   │   └── wsgi.py
│   ├── talleres/            # App principal
│   │   ├── models.py        # Modelo Taller
│   │   ├── serializers.py   # Serializers DRF
│   │   ├── views.py         # ViewSets API
│   │   ├── urls.py          # Rutas de la app
│   │   └── admin.py         # Admin Django
│   ├── manage.py
│   ├── requirements.txt     # Dependencias Python
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TallerCard.jsx    # Tarjeta de taller
│   │   │   └── TallerForm.jsx    # Formulario de creación
│   │   ├── services/
│   │   │   └── api.js            # Cliente API
│   │   ├── App.jsx               # Componente principal
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── Dockerfile
├── docker-compose.yml       # Orquestación de servicios
├── .gitignore
└── README.md
```

### Convención de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bugs
- `docs:` Documentación
- `style:` Formato de código
- `refactor:` Refactorización
- `test:` Tests
- `chore:` Tareas de mantenimiento


---

## 👤 Autor

**[Kian Saavedra Canessa]**
- GitHub: [@tu-usuario](https://github.com/kiancanessa)
- LinkedIn: [Tu Perfil](https://www.linkedin.com/in/kian-saavedra-canessa-76737b2b7)
- Email: kiansaaca@gmail.com

---

## 🙏 Agradecimientos

- CEU Centro de Especialización 

⭐️ Si este proyecto te fue útil, ¡considera darle una estrella en GitHub!
