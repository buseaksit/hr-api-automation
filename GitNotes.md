# Git
Git is a version control system that helps track changes in code and allows multiple people to collaborate on the same project efficiently. 

# What is GitHub? 
GitHub is a cloud based platform that hosts your Git repositories. 
It adds collaboration, sharing, and security features on top of Git. 
GitHub allows you to:
    * Store your repositories online. 
    * Share your code publicy, privately, or within an organization. 
    * Manage pull requests and issues. 
    * Work directly from your browser or tools like GitHub desktop, VsCode, Terminal etc. 

### How Git Works (Simple Flow)
Git has 3 main areas: 
1. Working Directory(Local) -> Where you edit your files(your project directory.)
2. Staging Area(Index) -> Where you prepare your files to be commited. 
3. Repository(Local Git Repo) -> Where commited versions are stored. 
4. GitHub Repo(Remote Repository) -> Local commits(changes) are sent here. 

## Setup & Authentication

### 1. Configure Git
```bash
# Check if the git is installled
git --version

# Set your global username and email
git config --global user.name "Your User Name"
git config --global user.email "Your Email" 
```
### 2. Authenticate with GitHub(Using Personal Access Token)
When you clone or push to GitHub for the first time, you'll need to authenticate. 

##### Steps: 
1. Go to **GitHub -> Settings -> Developer Settings -> Personal Access Token -> Tokens(classic)**
2. Click generate new token and choose your scope.
3. Copy the generated token, it shows only once. 

**Note**: 
Use the Token instead of Password, use github username and paste your personal access token. 

## Git Commands with Step-by-Step Workflow
 
### Step 1 -> Initialize your Project Directory As a Git Directory
```bash
git init
```

## Step 2(Optional-you can use this command any time) Check the Status of Files
```bash
git status
```

## Step 3: Add Files to Staging Area
- Telling git which files/folders it should track
- If you have so many changes and you want to track all of them 
```bash
git add -A
```
-- If you want to individually add 
```bash
git add fileName
```
-- Track all changes in the direactory
```bash
git add directoryName
```

**Untracking unwanted files**
```bash
git reset fileName
```
**Untrack(Reverse git add) for all**
```bash
git reset
```

## Step 4: Commit your changes
Once you complete all changes for your work, and will not do an additional change
you could commit. 
```bash
git commit -m "Message is always a must"
```

## Step 5: Link Your Local Repo to A Remote Repository
- You will create a repository space on the GitHub(or Bitbucket)
- Then 
```bash
git remote add remoteName remoteRepoLink
```

## Step 6: For the first time you must create a MAIN branch for your remote repo
```bash
git branch -M main
```
-- main doesn't have to be main, you could name your MAIN branch howevery you want

## Step 7: Push Commited Changes to The Remote Repository
```bash
git push -u origin main
```
- origin is a remote repo name from step 5, main is a main branch name from step 6


## Additional Way To Authenticate Without Username and Password/PAT

1. Get your PAT with necessary permissions
2. When adding a remote repository, 
add your PAT at the beginning of the remote repo url.
3. Know that, github url is always in the format of 
*https://github.com/your-username/your-reponame.git*
4. Add your personal access token(PAT) to url
**https://PAT@github.com/your-username/your-reponame.git**


# Git & GitHub Practice 

## 1. Check Repository & Remotes
Git stores your code locally, but you can connect to remote repository like Github
and share on that platform.

### Common Commands 
```bash
git remote -v
```
Shows connected remotes on the git repository. 

```bash
git remote add origin yourRepoLink
```
Adds a remote called `origin`. It doesn't have to be named origin
however, it is commonly used for remote repo names. 

```bash
git remote remove origin
```
Deletes the remote connection named origin. 

```bash
git remote rename origin mainRepo
```
Command above renames the remote named `origin` to `mainRepo`.


## 2. Check Status & Staging
Git has 3 areas:
    1. Working directory -> Your real files
    2. Staging area      -> Files ready to be committed
    3. Repository        -> History of committed changes 

### Commands
```bash
git status
```
Shows which files are modified,, new, or staged since the last commit. 
```bash
git add file/folderName # For individually selecting to add
git add -A  # for including all changes
```
It stages the files and all the files/folders in staging area will be included in next 
commit. 
```bash
git reset file/foldername # Removes the files/folders from staging area so that 
# they will not be included in the next commit. 
```

#### NOTE
Git workflow is usually 3 steps: Git Add -> Commit Changes -> Push Changes to Remote.
Only for the first time there are additional steps like authentication, creating a 
main upstream branch .... 
####

## 3. Commit Management
A commit is a snapshot of your project at a specific moment. 

### Commands
```bash
git commit -m "Commit message"
```
Create a commit with the messge. 

**`git log`**
```bash
git log # shows the commit history
### !!!!IMPORTANT!!!! Any problem commit related requires understanding of this 
### command. 
### To exit from the text press q
```
Shows all commits from newest -> oldest

**`git show`**
```bash
git show <comit-id>
### Displays the details of a specific commit\
### TO exit the output of this command press q
```
By default, this shows details of the latest comit.
TO see a specific commit we could provide commit id.

#### HEAD Pointer
`HEAD` means your current position in history usually the latest commit. 
```css
HEAD -> main
```
You can always reference past commits like 
```css
HEAD~1 -> one commit before
HEAD~2 -> two commits before
```

### Undo Commits(Resets)
1. Soft Reset
```bash
git reset --soft HEAD~1
```
* Moves `HEAD` back by one commit. 
* Keeps all your changes staged(ready-to-re-commit).
Use this when you want to redo a commit message or merge multiple commits. 
* Example flow: 
```bash
git commit -m "Wrong message"
git reset --soft HEAD~1
git commit -m "Better Message"
```

2. Mixed Reset(Default)
```bash
git reset HEAD~1
```
* Moves `HEAD` back one commit. 
* Keeps your changes in working directory, but unstaged.
* You have to do git add then git commit again. 
* Use this to completely uncommit but still keep your changes. 


3. Hard Reset(¡¡¡CAUTION!!!)
```bash
git reset --hard HEAD~1
```
* Moves `HEAD` back one commit
* **DELETES** all local changes since that commit and it is **UNRECOVERABLE**,
unless you have additional back ups. 
* Use only when you want to delete every single change since the last push. 


4. Reset to specific commit
```bash
git reset <commit-hash/id>
git reset --soft <commit-hash/id>
git reset --hard <commit-hash/id> # CAUTION
```
* Makes the commit id given the lates version and discarding everything 
after it. 

* **Revert A Commit(Safer Alternative)**
```bash
    git revert <commit-hash>
```
Instead of deleting the history, create a new commit that undo a specific one. 
This creates a new commit that reverses given commit's changes. 

### Compare Commits(diff)
* Compare your last 2 commits
```bash
git diff HEAD~1 HEAD
```
* Compary any 2 commits
```bash
git diff <commit1> <commit2>
```
- Shows line by line changes between them.

## 4. Branch Management
A branch in git is like parallel timeline of your project.
It lets multiple people work on different features, fixes, tests, without touching
the main code until the changes are ready.
* `main`/`dev`  -> stable version of your testing framework.
* `feauture/*`  -> where new features testings are developed.

### Basic Branch Commands
| Purpose                      | Command                       | Description                            |
| ---------------------------- | ----------------------------- | -------------------------------------- |
| List all branches            | `git branch`                  | Shows local branches                   |
| Create new branch            | `git branch feature1`         | Makes a new branch from current commit |
| Switch branch                | `git checkout feature1`       | Moves to that branch                   |
| Create + switch              | `git checkout -b feature1`    | Shortcut for both                      |
| Merge into current branch    | `git merge feature1`          | Merges feature1 into current branch    |
| Delete merged branch         | `git branch -d feature1`      | Safely removes branch after merge      |
| Force delete (if not merged) | `git branch -D feature1`      | Deletes unmerged branch                |
| Rename a branch              | `git branch -m newname`       | Renames the current branch             |
| Push new branch to GitHub    | `git push -u origin feature1` | Uploads and tracks the branch          |
| See remote branches          | `git branch -r`               | Lists branches on GitHub               |


#### NOTE
When pushing from the new branch for the first time, you must set up the branch
in remote repo using 


#### Pull Request (PR)
Workflow
1. You will get the task to automate
2. You will create a branch for automating that new feature
3. You will go the new branch and write your changes
4. Once finished, you will oush your changes to the your feature branch you created.
5. After that, you will create a PR merge your changes to the `main` branch of your remote
repository.Actual name of `main` branch doesnt't have to be `main`.
6. Once the PR is created, you will wait either your QA lead or another member of your QA team to approve your changes.
7. Once the changes are approved then you could take your changes from your feature
branch to the `main` branch. This step is called **merging** the changes from feature branch to main branch.
8. After the merge is complete, then you could delete your feature branch.
Additional note: If on step 6 and changes are not approved, you will do requested
changes then re-commit, then ask for approval once more, no need to create additional pr.

## Conflict Resolution
- This is a scenario that is likely to happen in the enterprise environment.
- Imagine QA-1 and QA-2 started working on two features at the same time.
- They created their branch from the same `main` branch. There are some files that are going to work on it at the same time.
- One of those files is called `file1.txt`
- When they fisrt created their branch based on the main they both srated with file1.txt looks like 
```file1.txt
Hello World
Change 1
Change 2
Another Change
```
- QA-1 has finished its work **before** the QA-2 and **merged** the changes that it made to file1.txt to main branch.
Now file`.txt look like:
```file1.txt
Hello World
Change 1
New imp by QA-1
New imp by QA-1
```
-- Following thus QA-2 has finished its changes and now in **QA-2** branch the file1.txt
looks like :
```file1.txt
Change 1
Change 2
Another Change
New imp by QA-2
New imp by QA-2
```
-- When a QA-2 tries to merge form **QA-2** branch to main branch it will encounter a **CONFLICT** because `file1.txt` is different now in main branch then how **QA-2** branch started.
The reason for this is while **QA-2** was still working, **QA-1** altered the main branch `file1.txt`.




