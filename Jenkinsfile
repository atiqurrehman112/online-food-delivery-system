pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/YOUR_USERNAME/online-food-delivery-system.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t food-delivery-app .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker run -d -p 3000:3000 food-delivery-app'
            }
        }
    }
}