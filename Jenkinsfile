pipeline {
  agent any

  environment {
    IMAGE_NAME = 'react-cicd'            // your Docker image name
    CONTAINER_NAME = 'react-cicd-container'
    HOST_PORT = '8081'
    CONTAINER_PORT = '80'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
  steps {
    sh '/usr/local/bin/npm install'
  }
}


    stage('Build React App') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Docker Build') {
      steps {
        script {
          sh "docker build -t ${IMAGE_NAME} ."
        }
      }
    }

    stage('Stop Previous Container') {
      steps {
        script {
          sh "docker rm -f ${CONTAINER_NAME} || true"
        }
      }
    }

    stage('Run Docker Container') {
      steps {
        script {
          sh "docker run -d --name ${CONTAINER_NAME} -p ${HOST_PORT}:${CONTAINER_PORT} ${IMAGE_NAME}"
        }
      }
    }
  }

  post {
    success {
      echo "✅ Deployment successful! Open http://localhost:${HOST_PORT} to see your app."
    }
    failure {
      echo "❌ Build or deployment failed. Check console output."
    }
  }
}
