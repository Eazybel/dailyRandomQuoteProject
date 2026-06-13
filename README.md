# Daily Positivity: Automated Quote Emailer 🌟

Daily Positivity is a full-stack web application and automation workflow that delivers a handpicked, positive motivational quote to subscribers' email inboxes every single day. Built using the **MERN Stack** (MongoDB, Express.js, React, Node.js) and orchestrated with **n8n**, this project bridges web development with modern low-code backend automation.

---

## 🚀 Features

* **User Dashboard (React):** A sleek, modern UI for users to subscribe, unsubscribe, and manage their delivery time preferences.
* **Quote Management Admin Panel:** An interface to view, add, or curate the positive quotes database.
* **RESTful API (Node/Express):** Handles user data, preferences, and serves random/scheduled quotes from the database.
* **Database (MongoDB):** Securely stores user profiles, subscription states, and a vast collection of positive quotes.
* **n8n Automation Engine:** A reliable, self-hosted or cloud-based cron-triggered workflow that fetches a random quote from the API and dispatches beautifully designed emails daily.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Tailwind CSS,
* **Database:** MongoDB (Mongoose ORM)
* **Automation/Cron:** n8n
* **Email Delivery:** Nodemailer / SMTP (via n8n email node)

---

## 📐 Architecture Overview

1. **Frontend (React)** ➡️ Sends subscription data to ➡️ **Backend (Express/MongoDB)**.
2. **n8n Workflow** is triggered daily via a **Cron/Schedule Node**.
3. **n8n HTTP Request Node** calls the Express API endpoint `/api/quotes/random`.
4. **n8n Email Node** maps the quote data into an HTML template and sends it to all active subscribers.

---

## ⚙️ Getting Started

### Prerequisites
* Node.js (v18+ recommended)
* MongoDB (Local or Atlas URI)
* A running instance of n8n (Cloud, Desktop, or Docker self-hosted)
* An SMTP Server / Email Service Provider credentials (e.g., SendGrid, Gmail App Password)


