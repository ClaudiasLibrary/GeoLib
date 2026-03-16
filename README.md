# GeoLib

GeoLib is a prototype web application designed to manage and explore small private book collections.  
The system allows users to catalog their books, explore nearby collections through geolocation, and view usage statistics.

This project was developed as part of a university thesis focused on web technologies, databases, and cybersecurity.

---

## Features

- User registration and profile management
- Book metadata management
- Book cover upload with thumbnail generation
- Text search and geospatial search
- Interactive map visualization
- Book detail pages
- Simulated loan request system
- Basic usage statistics dashboard
- Privacy-aware geolocation system

---

## Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- Leaflet.js (map visualization)
- Chart.js (statistics)

### Backend
- Node.js
- Express.js
- REST API architecture

### Database
- PostgreSQL
- PostGIS extension for geospatial queries

### Other tools
- Git / GitHub
- Sharp (image processing)
- Multer (file upload)

---

## System Architecture

The application follows a **client-server architecture**.

Frontend (React) communicates with the backend through REST APIs.  
The backend manages authentication, database interactions, and image processing.

Frontend → REST API → Backend → PostgreSQL/PostGIS
↓
Image Storage

---

## Main Functional Modules

### User Management
Users can register and manage their personal profiles.

### Book Management
Users can add books including:

- title
- author
- publication year
- category
- cover image

### Geolocation Search
Users can find nearby collections using spatial queries.

### Interactive Map
Collections are displayed on a map using Leaflet and OpenStreetMap.

### Statistics
The system collects basic metrics such as:

- book views
- simulated loan requests
- number of books per user

---

## Database Structure

Main entities:

### Users
id
username
email
password_hash
description
location (geospatial)

### Books
id
user_id
title
author
year
category
cover_image
created_at

### Views
id
book_id
timestamp

### Loans
id
book_id
requester_id
status

---

## Installation

### Requirements

- Node.js
- PostgreSQL
- npm

### Clone repository
git clone https://github.com/ClaudiasLibrary/GeoLib.git

### Install dependencies
npm install

### Configure environment variables

Create a `.env` file:
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=password
DB_NAME=geolib
PORT=3000

### Run the server
npm start

---

## Future Improvements

Possible future developments include:

- real loan management system
- messaging system between users
- mobile application
- advanced recommendation system
- improved scalability through cloud deployment

---

## License

This project was developed for academic purposes.
