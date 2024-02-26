pipeline {
    agent any
    tools {
        nodejs "my-nodejs"
    }
    stages {
// installing dependencies for the application
        stage('Install Dependencies') {
            steps {
                // Use Node.js and npm installed on the Jenkins agent
                sh 'npm install'
            }
        }
        stage('Run Unit Tests') {
            steps {
                echo 'unit test the application ...'
                script {
                     //Use the Angular CLI to run tests in headless mode
                    sh 'export CHROME_BIN=/usr/bin/google-chrome && npm run test'
                }
            }
        }

        stage('build angular') {
            steps {
                 //building the application 
                echo 'Building the application ...'
                sh 'npm run build'

            }
        }
        stage('Archive Dist') {
           steps {
                script {
                  // Generate a timestamp or use Jenkins environment variables
                    sh "tar -czvf dist-${BUILD_NUMBER}.tar.gz -C dist/ ."
                }
            }
        }
        stage('Upload Artifact to Nexus') {
            steps {
                script {
                     //Assuming 'dist/' is your build directory
                    
                    sh "curl -u jenkins:12345678 --upload-file dist-${BUILD_NUMBER}.tar.gz http://192.168.0.128:8081/repository/artifact-repo/dist-${BUILD_NUMBER}.tar.gz"
                    
                }
            }
        }

         stage('build image') {
            steps {
                // Here we want to build the image for our application and push it to docker private repository (docker hub)
                echo 'Building the Image ...'

                 //using the credentials plugin to fetch credentails already configured for the docker hub repo in jenkins 
                 //withCredentials([usernamePassword(credentialsId: 'docker-hub-repo', passwordVariable: 'PASS', usernameVariable: 'USER')]){
                    //building the image 
                    //sh "docker build -t youssefessam/angular-app:ang-${BUILD_NUMBER} ."
                     //login to dockerhub
                    //sh "echo $PASS | docker login -u $USER --password-stdin"
                    //push to the dockerhub repository
                    //sh 'docker push youssefessam/angular-app:ang-3.0'


                //}
    

            }
        }

        
        }
post {
    failure {
        mail bcc: '', body: "<b>Example</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL for the build: ${env.BUILD_URL}", cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: '', subject: "ERROR CI: Project name -> ${env.JOB_NAME}", to: "youssef.beraikaa@gmail.com";
    }
}

    }
