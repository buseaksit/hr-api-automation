pipeline{
    agent any

    stages{
        stage('Checkout Code'){
            steps{
                echo 'Cloning HR-API-PW-Automation'
                git branch: 'main',
                credentialsId: 'f2d5859f-985e-460f-97fc-f2b1c13be6fe',
                url: 'https://github.com/buseaksit/hr-api-automation.git'
            }
        }

    

    stage('Setup Node Environment'){
        steps{
            sh 'npm ci || npm install'
        }
    }
    stage('Install Playwright Browsers'){
        steps{
            sh 'npx playwright install --with-deps'
        }
    }
    stage('Run Api Tests'){
        steps{
            sh 'npx playwright test'
        }
    }
    stage('Archive Reports'){
        steps{
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
        }
    }
    }

    post{
        success { echo 'Build SUCCEDED!! -- All api tests pased. '}
        failure {echo 'Build failed.'}
    }

}
