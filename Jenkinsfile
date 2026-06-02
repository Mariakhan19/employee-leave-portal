pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                url: 'https://github.com/Mariakhan19/employee-leave-portal.git'
            }
        }

        stage('Deploy Docker Stack') {
            steps {
                sh '''
                docker stack deploy -c docker-compose.yml employee-app
                '''
            }
        }

    }
}
