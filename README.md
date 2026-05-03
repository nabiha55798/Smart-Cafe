# 🍽️ Smart Café Ordering & Delivery System

A premium, full-stack MERN application for modern restaurant management, featuring real-time tracking, professional design aesthetics, and a comprehensive administration suite.

---

## 🚀 Technology Stack

### **Frontend (Client-Side)**
*   **Framework**: [Next.js 16](https://nextjs.org/) (App Router Architecture)
*   **Library**: [React 19](https://react.dev/)
*   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) (Modern Utility-First Styles)
*   **Icons**: [Lucide React](https://lucide.dev/) (Sleek, Professional Iconography)
*   **Mapping**: [Leaflet](https://leafletjs.com/) & [React-Leaflet](https://react-leaflet.js.org/) (Live Rider Tracking)
*   **API Client**: [Axios](https://axios-http.com/) (Streamlined HTTP Requests)
*   **Real-time**: [Socket.io-Client](https://socket.io/) (Live Order Status Updates)

### **Backend (Server-Side)**
*   **Runtime**: [Node.js](https://nodejs.org/)
*   **Framework**: [Express.js 5](https://expressjs.com/) (Next-Gen Fast & Flexible)
*   **Database**: [MongoDB](https://www.mongodb.com/) (NoSQL Scalability)
*   **ODM**: [Mongoose 9](https://mongoosejs.com/) (Elegant Data Modeling)
*   **Security**: 
    *   **JWT (JSON Web Tokens)**: Secure Authentication
    *   **BcryptJS**: Industry-Standard Password Hashing
*   **Real-time Server**: [Socket.io 4](https://socket.io/) (Bi-directional communication)
*   **Environment**: [Dotenv](https://www.npmjs.com/package/dotenv) (Secure configuration)

---

## ✨ Key Features

- **💎 Premium UI/UX**: Professional color palette (`#84994F`, `#FFE797`, `#FCB53B`, `#A72703`) and high-quality generated food assets.
- **🛒 Dynamic Menu**: Categorized browsing (Appetizers, Main Course, Desserts, Beverages) with professional imagery.
- **📍 Real-time Delivery**: Live map visualization using Leaflet for riders and customers.
- **🔐 Secure Auth**: Robust login/signup system with role-based access for Admins, Riders, and Customers.
- **⚡ Live Order Management**: Socket-driven updates for order status (Received, Preparing, On the Way, Delivered).
- **🛠️ Admin Control**: Full CRUD operations for menu items and oversight of all platform activity.

---

## 📂 Project Structure

```text
resturent/
├── frontend/             # Next.js Application
│   ├── src/
│   │   ├── app/          # App Router (Pages & Layouts)
│   │   ├── components/   # Reusable UI Blocks
│   │   ├── context/      # Auth & Global State
│   │   └── utils/        # Helpers & API Config
├── backend/              # Node.js/Express Server
│   ├── models/           # Mongoose Schemas (User, Order, Menu)
│   ├── routes/           # API Endpoints
│   ├── middleware/       # JWT Identity Verification
│   └── seedMenu.js       # Database Initialization Script
```

---

## 🛠️ Getting Started

1. **Backend**:
   ```bash
   cd backend
   npm install
   # Configure .env with your MONGODB_URI and JWT_SECRET
   node index.js
   ```

2. **Frontend**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

---

> [!NOTE]
> Designed and Developed as a high-performance Smart Café solution, focusing on visual excellence and real-time reliability.
