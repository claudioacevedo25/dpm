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
         }

