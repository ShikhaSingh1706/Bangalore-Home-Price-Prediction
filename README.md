Bangalore Home Price Prediction Project

This project demonstrates the step-by-step process of building a real estate price prediction website. The project involves three key components:

1. Model Building

Dataset: Bangalore home prices dataset from Kaggle.

Tools Used: Python, Jupyter Notebook, Numpy, Pandas, Matplotlib, Scikit-Learn.

Concepts Covered:

Data loading and cleaning.

Outlier detection and removal.

Feature engineering and dimensionality reduction.

Hyperparameter tuning using GridSearchCV.

Model evaluation using K-fold cross-validation.

2. Backend (Flask API)

A Python Flask server is built to serve HTTP requests using the trained model.

The server handles requests from the frontend and returns the predicted home prices.

3. Frontend (Web UI)

The user interface is built using HTML, CSS, and JavaScript.

It allows users to input home details such as square footage, number of bedrooms, and bathrooms.

On submission, the frontend calls the Flask server API to retrieve and display the predicted price.

Deployment

The entire application is deployed on an AWS EC2 instance.

Steps for deployment:

Create an EC2 instance using the Amazon console.

Set up a security group to allow HTTP traffic.

Connect to the instance via SSH.

Install and configure Nginx as a reverse proxy for the Flask application.

Copy the project files to the EC2 instance using WinSCP.

Configure Nginx to serve the web application.

Install Python dependencies and start the Flask server.

Technology Stack

Programming Language: Python

Libraries: Numpy, Pandas, Matplotlib, Scikit-Learn

Web Framework: Flask

Frontend: HTML, CSS, JavaScript

IDE: Jupyter Notebook, Visual Studio Code, PyCharm

Cloud Platform: AWS EC2

This project provides a comprehensive learning experience in data science, web development, and cloud deployment, covering a wide range of real-world concepts and tools.
