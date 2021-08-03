pipeline {
    agent {
        label "TEST-FE"
    }
    stages {
        stage("Build") {
            steps {
                     sh "./PIPELINE/build.sh"                     
            }            
           }
        stage("Deploy") {
            steps {
                     sh "./PIPELINE/deploy.sh"                     
            }            
           }
          } 
  post {
    success {
      slackSend (color: '#00FF00', message: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
    }

    failure {
      slackSend (color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
    }
         }
         }