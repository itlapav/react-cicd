pipeline {
  agent any

  tools {
    nodejs 'NodeJS 16'  // Use the exact name you configured in Jenkins
  }

  environment {
    IMAGE_NAME = 'react-cicd'
    CONTAINER_NAME = 'react-cicd-container'
    HOST_PORT = '8081'
    CONTAINER_PORT = '80'
    PATH = "/usr/local/bin:${env.PATH}"  // Add Docker CLI to PATH
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

stage('Run Tests') {                // 👈 Add this block
  steps {
    sh 'npm test -- --watchAll=false'
  }
}

    stage('Build React App') {
      steps {
        sh 'CI=false npm run build'   // Disable strict CI warnings-as-errors
      }
    }

    stage('Docker Build') {
      steps {
        sh "/usr/local/bin/docker build -t ${IMAGE_NAME} ."
      }
    }

    stage('Stop Previous Container') {
      steps {
        sh "/usr/local/bin/docker rm -f ${CONTAINER_NAME} || true"
      }
    }

    stage('Run Docker Container') {
      steps {
        sh "/usr/local/bin/docker run -d --name ${CONTAINER_NAME} -p ${HOST_PORT}:${CONTAINER_PORT} ${IMAGE_NAME}"
      }
    }
  }

  post {
    success {
      echo "✅ Deployment successful! Visit http://localhost:${HOST_PORT}"
    }
    failure {
      echo "❌ Build or deployment failed."
    }
  }
}
