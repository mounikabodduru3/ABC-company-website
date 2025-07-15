# ABC Company Website

This project includes:

- 🎯 A **pixel-perfect Landing Page** designed as per the Figma design
- 🛠️ A **CMS Page** to dynamically update the main heading text
- 🔁 Backend APIs to connect the CMS with the landing page using MongoDB
- 🚀 Fully responsive UI with Font Awesome icons, sticky navbar, and styled sections

---

## 📁 Project Structure

abc-company-website/
├── client/
│ ├── landing.html
│ ├── cms.html
│ ├── styles/
│ │ └── main.css
│ ├── assets/
│ │ └── icons/
│ └── js/
│ ├── cms.js
│ └── landing.js
├── server/
│ ├── index.js
│ ├── models/
│ │ └── Heading.js
│ ├── routes/
│ │ └── headingRoutes.js
│ └── .env
├── package.json
└── README.md


2. Install Backend Dependencies
bash
Copy
Edit
cd server
npm install
3. Setup .env
Inside the server/ folder, create a .env file with the following:

env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/abc-company
Make sure MongoDB is running locally.

4. Run the Backend
bash
Copy
Edit
node index.js
🖥️ Run the Frontend
Open client/landing.html in Live Server or your browser.

Open client/cms.html to manage the dynamic heading.

🔗 APIs
➕ POST /api/heading
Used to update the heading from the CMS page.

Request Body:

json
Copy
Edit
{ "text": "New heading text here" }
📥 GET /api/heading
Used by the landing page to fetch the latest heading.

Response:

json
Copy
Edit
{ "text": "Hyper boost your Revenue Management..." }
✨ Features
🌐 Responsive design (mobile/tablet/desktop)

🔁 Reusable components

🧠 Dynamic content from MongoDB

🎨 Styled with custom CSS + Font Awesome icons

🧩 Modular file structure

📦 Dependencies
Express.js

Mongoose
