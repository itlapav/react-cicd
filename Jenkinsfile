pipeline {
  agent any
  stages {
    stage('Test Git') {
      steps {
        git branch: 'main', url: 'https://github.com/itlapav/react-cicd.git'
        echo 'Git checkout succeeded!'
      }
    }
  }
}
