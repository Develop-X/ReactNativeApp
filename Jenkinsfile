pipeline {
agent {
        dockerfile {
            filename 'Dockerfile'
        }
    }
stages {
    stage('slack notification') {
        agent none
        steps {
            slackSend color: "good", message: "Build Started - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
        }
    }

    stage('run tests') {
        steps {
                sh 'cd /project && yarn test'
            }
    }

    stage ('publish to expo') {
        environment {
            expo_creds = credentials('expo_credentials')
        }
        steps {
            sh "npx expo login -u $expo_creds_USR -p $expo_creds_PSW && mv env.beta.ts env.ts && EXPO_DEBUG=true npx expo publish --non-interactive --release-channel ${env.BRANCH_NAME}"
        }
    }
}

post {
    success {
        slackSend color: "good", message: "Build Finished - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>) duration: ${currentBuild.durationString}"
    }
    unstable {
        slackSend color: "warning", message: "Build Unstable - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>) duration: ${currentBuild.durationString}"
    }
    failure {
        slackSend color: "danger", message: "Build Failed - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>) duration: ${currentBuild.durationString}"
    }
}
}