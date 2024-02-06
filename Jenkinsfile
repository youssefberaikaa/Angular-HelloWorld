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
                script {
                    // Use the Angular CLI to run tests in headless mode
                    sh 'export CHROME_BIN=/usr/bin/google-chrome && ng test'
                }
            }
        }

        stage('build angular') {
            steps {
                // building the application 
                echo 'Building the application ...'
                sh 'npm run build'

            }
        }
        stage('Upload Artifacts to Nexus') {
            steps {
                script {
                    // Assuming 'dist/' is your build directory
                    withCredentials([usernamePassword(credentialsId: 'nexus-repo', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                    sh """
                    cd dist/
                    find . -type f -exec curl -u $USER:$PASS --upload-file {} http://192.168.1.3:8081/repository/angular-artifacts/{} \\;
                    """
                }
                }
            }
        }

         stage('build image') {
            steps {
                // Here we want to build the image for our application and push it to docker private repository (docker hub)
                echo 'Building the Image ...'
                // using the credentials plugin to fetch credentails already configured for the docker hub repo in jenkins 
                //withCredentials([usernamePassword(credentialsId: 'docker-hub-repo', passwordVariable: 'PASS', usernameVariable: 'USER')]){
                    //building the image 
                    //sh 'docker build -t youssefessam/angular-app:ang-2.0 .'
                    // login to dockerhub
                    //sh "echo $PASS | docker login -u $USER --password-stdin"
                    //push to the dockerhub repository
                    //sh 'docker push youssefessam/angular-app:ang-2.0'


                //}
    

            }
        }

        stage('deploy') {
            steps {
                // Build the Angular app
                echo 'deploying the application ...'
                }
            }
        }
    }
