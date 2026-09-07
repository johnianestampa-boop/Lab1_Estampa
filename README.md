# Lab1_Estampa

Step 1: Configure Git identity
Set the Git username and email used for commit authorship.

git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

Step 2: Create the project and initialize a repository
Created a project folder, opened it in VS Code, and initialized a local Git repository.

mkdir my-webpage
cd my-webpage
code .
git init

Step 3: Create the initial HTML-only page and commit
Created index.html containing plain HTML markup only, with no CSS or JavaScript, then made the first commit.

git add index.html
git commit -m "Initial HTML-only version"

Step 4: Create the no-style branch
Created a branch named no-style to preserve the original HTML-only version.

git branch no-style

Step 5: Switch to main and add CSS and JavaScript
Switched back to the main branch and built out a full portfolio: a styled index.html linked to style.css and script.js, adding layout, a dark/light theme toggle, a live clock, and a copy-to-clipboard email button.

git checkout main
index.html — hero, About, Projects, Skills, and Contact sections
style.css — dark theme with a teal accent, responsive layout
script.js — theme toggle, live clock, copy-email button, dynamic footer year

Step 6: Commit the completed version and connect to GitHub
Committed the styled, interactive version, created a new repository on GitHub, and connected it as the remote origin for the local repository.

git add .
git commit -m "Add CSS styling and JavaScript interactivity"
git remote add origin https://github.com/username/repo-name.git

Step 7: Resolve a push rejection
The first push to main was rejected because the GitHub repository already contained a commit (created when the repository was initialized with a README) that the local repository did not have. Resolved this by setting a merge strategy and pulling with the unrelated-histories flag before pushing again.

git config pull.rebase false
git pull origin main --allow-unrelated-histories

A merge commit message editor opened during the pull; the default message was saved and the editor closed to complete the merge.
git push -u origin main

Step 8: Create an HTML-only version of the portfolio for the no-style branch
Built a second version of index.html containing only the portfolio content and structure, with no stylesheet link, no script tag, and no styling-related attributes, so it renders as plain unstyled HTML.

git checkout no-style
git add index.html
git commit -m "Update no-style version with portfolio content"

Step 9: Push the no-style branch
Confirmed that pushing a branch only affects that branch on GitHub and does not alter main, then pushed no-style separately.
git push origin no-style
Result: both branches now exist on GitHub, each with its own version of index.html — the styled/interactive version on main, and the plain HTML version on no-style.

Step 10: Run the page locally
Investigated why localhost:8080 could not be reached: no server was running on that port. For a static HTML/CSS/JS project, this is resolved either by opening the file directly in a browser or by running a local server (for example, the VS Code Live Server extension).

Step 11: Configure Ctrl+F5 to launch the page
Created a launch.json file in the Run and Debug panel so that Ctrl+F5 opens index.html directly in the browser, without needing a separate server.
{
  "version": "0.2.0",
  "configurations": [{
    "type": "chrome",
    "request": "launch",
    "name": "Launch index.html",
    "file": "${workspaceFolder}/index.html"
  }]
}
and that is my step by step on how did i did the repository
