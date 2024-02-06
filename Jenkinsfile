pipeline {
    agent any
    tools {
        nodejs "my-nodejs"
    }
    stages {
// testing webhooks again and again
        stage('Install Dependencies') {
            steps {
                // Use Node.js and npm installed on the Jenkins agent
                sh 'npm install'
            }
        }

        stage('build angular') {
            steps {
                // building the application 
                echo 'Building the application ...'
                sh 'npm run build'

            }
        }

         stage('build image') {
            steps {
                // Here we want to build the image for our application and push it to docker private repository (docker hub)
                echo 'Building the Image ...'
                // using the credentials plugin to fetch credentails already configured for the docker hub repo in jenkins 
                withCredentials([usernamePassword(credentialsId: 'docker-hub-repo', passwordVariable: 'PASS', usernameVariable: 'USER')]){
                    //building the image 
                    sh 'docker build -t youssefessam/angular-app:ang-2.0 .'
                    // login to dockerhub
                    sh "echo $PASS | docker login -u $USER --password-stdin"
                    //push to the dockerhub repository
                    sh 'docker push youssefessam/angular-app:ang-2.0'


                }
    

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
