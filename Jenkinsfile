pipeline{
    agent any
    stages{
        stage("build"){
            steps{
                sh '''
                    docker build -t azima/jenkins:${BUILD_NUMBER} .
                '''
            }
        }

        stage("Docker Login"){
            steps{
                withCredentials([usernamePassword(credentialsId: "DOCKER_AUTH", usernameVariable: "user",passwordVariable:"pass")]){                    sh '''
                        docker login -u ${user} -p ${pass}
                        echo done
                    '''
                }
            }
        }

        stage("Push Image") {
            steps{
                sh '''
                    docker push azima/jenkins:${BUILD_NUMBER}
                    echo done
                '''
            }
        }

        stage("Docker Remove IF Exist"){
            steps{
                catchError(message: "Message"){
                    sh '''
                        docker rm -f portfolio
                    '''
                }
            }
        }

        stage("Docker Run Portfolio"){
            steps{
                sh '''
                    docker run -it -d -p 80:8080 --name portfolio azima/jenkins:${BUILD_NUMBER}
                '''
            }
        }
    }

    post{
        always{
            echo "Start Stages Pipeline"
        }
        success{
            echo "success Create Pipeline"
        }
    }
}