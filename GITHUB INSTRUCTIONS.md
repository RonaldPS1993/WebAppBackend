STEPS FOR GITHUB

**go to your folder (backend or front end)**
cd (name of your folder goes here)

**/if you have not cloned repository to your computer yet do**
git clone (link of repository goes here)

**initialze git repository**
git init . 

**to show the branches that exist do**
git branch

**to create a branch from master and go into the new branch do**
git checkout -b (name of your new branch)

**tells you the untracked files you have**
git status

**to track the files**
git add (name of file goes here) 

**to track all files and add all files**
git add -A

**do this again to see if the files are now added and in staging**
git status 

**this is used to commit the files**
git commit -m "comment goes here"

**or you can use this to combine ADD and COMMIT in one step do**
git commit -a -m "comment goes here"

**PUSHING INTO GITHUB**
git push origin (name of your branch goes here)

**CREATING PULL REQUEST ON GITHUB WEBSITE**
on your branch you should see a green button next to the branch name that says new pull request.
then you will se compare changes, the base:master and compare:(your branch).
allows to create a pull request. gives option to leave a comment and click on a green button that says 'create pull request'.
takes you to your pull request which allows you to see the commits and what was changed

**LAST STEP TO MERGE TO MASTER**
on that same screen you should see the option to merge pull request, click on that green button

**optional: if you want to check your commit**
git log
**to exit out of log hit 'q' to quit from log**



**optional if you want to see the changes made to file use**
git diff (name of file goes here) 
**to exit out of diff hit 'q'**


**good to know: to go to the branch of your choice do**
git checkout (name of branch goes here)

**good to know: to go back to master branch**
git checkout master









