pipeline {
  agent any

  tools {
    nodejs 'NodeJS 16'
  }

  environment {
    IMAGE_NAME = 'react-cicd'
    CONTAINER_NAME = 'react-cicd-container'
    HOST_PORT = '8081'
    CONTAINER_PORT = '80'
    PATH = "/usr/local/bin:${env.PATH}"
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

    stage('Run Tests') {
      steps {
        sh 'npm test -- --watchAll=false'
      }
    }

    stage('Build React App') {
      steps {
        sh 'CI=false npm run build'
      }
    }

    stage('Docker Build') {
      steps {
        sh "docker build -t ${IMAGE_NAME} ."
      }
    }

    stage('Push Docker Image') {
      steps {
        sh "docker tag ${IMAGE_NAME} itlapav933/${IMAGE_NAME}:latest"
        sh "docker push itlapav933/${IMAGE_NAME}:latest"
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        withCredentials([file(credentialsId: 'kubeconfig-file', variable: 'KUBECONFIG')]) {
          sh 'kubectl apply -f k8s/deployment.yaml'
          sh 'kubectl apply -f k8s/service.yaml'
        }
      }
    }
  }

  post {
    success {
      echo "✅ Deployed successfully to Kubernetes!"
    }
    failure {
      echo "❌ Build or deployment failed."
    }
  }
}
