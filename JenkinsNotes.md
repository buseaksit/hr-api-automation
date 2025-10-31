# Jenkins
* Jenkins is a build automation server. It watches your code, pulls changes, then runs defined steps. 
* It is event-driven: code pushed by devs - pipepline runs -> results and reports
* For testers, jenkins is always on test runner. It runs your Playwright suites on every commit, on a schedule or on deman and publishes reports you can share. 

## Must Knows
- **Controller && Agents** Controller(JenkinsUI) schedules work. Agents(machines) actually run jobs. One box can be both.
- **Job/Project**: A runnable definition. For modern setups we use Pipeline(defined in a `Jenkinsfile`). 
- **Pipeline** Code that describes stages like `Install`, `Test`, `Report`. It lives in your repository(In your fraamework) so history is versioned. 
- **Workspace**: A folder jenkins uses to clone the repo and run commands
- **Credentials**: Secure storage for tokens like GitHub Personal Access Token. 
- **Artifacts & Reports** Files Jenkins saves after a run like Playwright Report for viewing/downloading later. 
- **Triggers** When jobs run (webhook on push, poll SCM, schedule/cron, manual build now). 

## How we use Jenkins in Test Automation
* **Consistency**: Same commands, same environment, every time so no tester/dev can say works on my machine. 
* **Speed & Feedback**: Tests run immediately on PRs; team sess red/green fast. 
* **Visibility**: Central dashboard for pass/fail history, flaky tests, duration trends. 
* **Artifacts**: We keep Playwright's HTML report for every build. 

## Jobs in Jenkins
A job(or project) is any runnable configuration in Jenkins. 
Every job tells Jenkins: 
    1. Where the code is located (GitHub, Local, Bitbucket etc.)
    2. What commands to run(build, test, deploy)
    3. When to run them(trigger, webhook, cron)
So difference in job types in jenkins essentially defines how these instructions will be given to jenkins. 

## The Main Job Styles 
### 1. Freestyle Project(Basic GUI Job)
* The oldest and simples jenins job ideal to understand what jenkins does. 
* Everything is configured through the web UI(no Jenkinsfile)
* You manually choose:
    - Source code managemnt(Git repo)
    - Build triggers(manual, periodic, webhook)
    - Build steps(shell commands)
    - Post build actions(e.g., archive artifacts)
* What we are using now for our first Playwright automation + daily cron run.
* Analogy: Running commands in the terminal but jenkins clicks the button for you. 

### 2. Pipeline Project(Modern, Scripted Automation)
* A pipeline is Jenkins job as code. 
* You define steps in a `Jenkinsfile` written in `Groovy DSL` stored in your github repo. 
* Supports stages, parallel execution, environment variables, and error handling. 
* Ideal for CI/CD automation, reproducible and versioned.
* Two ways: 
    1. Declarative Pipeline -> the structured, readable version(recommended for teams)
    2. Scripted Pipeline -> raw Groovy scripting for more flexibility.