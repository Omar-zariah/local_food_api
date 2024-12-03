# 🌍 Local Food API

**Local Food API** is a modern RESTful API designed to provide access to a rich variety of local ingredients, recipes, and restaurants. Perfect for developers looking to build food-focused applications that celebrate diverse, local flavors.

## 🚀 Quick Overview
- **Repository**: [GitHub - Local Food API](https://github.com/Omar-zariah/local_food_api)
- **Built with**: Node.js, Express, MongoDB, Mongoose

## 📋 Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Installation](#installation)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)
7. [Contributing](#contributing)
8. [License](#license)

## 🌟 Features

- 🌿 **Ingredient Database**: Access detailed data about locally sourced ingredients.
- 🍲 **Recipe Manager**: Easily create, retrieve, and manage recipes.
- 🏨 **Restaurant Finder**: Discover local restaurants offering cuisines that celebrate local ingredients.
- 📡 **RESTful API**: Seamless integration with front-end apps or third-party services.
- 🔒 **Secure and Reliable**: Built with industry best practices to ensure stability and security.

## 🛠 Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB (using Mongoose for ORM)
- **Hosting**: Can be deployed on Heroku, AWS, etc.
- **API Testing**: Postman, Insomnia, or any REST client

## 🏁 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites
- **Node.js** (v14 or later recommended)
- **MongoDB** (local installation or use MongoDB Atlas)
- **Git**

## 🔧 Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Omar-zariah/local_food_api.git
   cd local_food_api
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   - Create a `.env` file in the root directory and add:
     ```
     MONGO_URI=mongodb://localhost:27017/local_food_api
     PORT=3000
     ```

4. **Run MongoDB**
   - Ensure MongoDB is running locally, or connect to your remote MongoDB instance.

5. **Start the Server**
   ```bash
   npm start
   ```
   The server will run at `http://localhost:3000`.

## 📖 Usage

You can use tools like **Postman** or **Insomnia** to interact with the API. The API provides endpoints for managing ingredients, recipes, and restaurants.

### 🌱 Sample Data
When you run the server for the first time, it automatically seeds the database with sample data for ingredients, recipes, and restaurants.

## 📊 API Endpoints

### Ingredients
- **GET /ingredients**: Retrieve all ingredients.
- **GET /ingredients/:id**: Retrieve a specific ingredient by ID.
- **POST /ingredients**: Add a new ingredient.

### Recipes
- **GET /recipes**: Retrieve all recipes, including ingredient details.
- **GET /recipes/:id**: Retrieve a specific recipe by ID.
- **POST /recipes**: Add a new recipe.

### Restaurants
- **GET /restaurants**: Retrieve all restaurants.
- **GET /restaurants/:id**: Retrieve a specific restaurant by ID.
- **POST /restaurants**: Add a new restaurant.

## 📦 Deployment

### Deploy on Heroku
1. Create a new app on **Heroku**.
2. Add your MongoDB connection string as a config variable.
3. Push your code to Heroku:
   ```bash
   git push heroku main
   ```

### Deploy on Other Platforms
- **AWS EC2**: Deploy the app on a virtual server and configure your MongoDB accordingly.
- **Docker**: Create a Dockerfile and containerize your app for easy deployment.

## 🤝 Contributing

We welcome contributions from the community! Follow these steps to contribute:

1. **Fork the Repository**
2. **Create a Feature Branch** (`git checkout -b feature/new-feature`)
3. **Commit Your Changes** (`git commit -m 'Add new feature'`)
4. **Push to Branch** (`git push origin feature/new-feature`)
5. **Open a Pull Request**

Feel free to open issues for feature requests or bugs.

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Have questions or want to connect?
- **GitHub**: [Omar-zariah](https://github.com/Omar-zariah)
- **Email**: omarzariah.dev@gmail.com

---

**⭐️ Star this repo** if you find it useful!

![Divider](https://source.unsplash.com/1600x100/?food,spices)
