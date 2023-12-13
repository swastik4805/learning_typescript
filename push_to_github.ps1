# Add changes to the repository
git add .

# Commit changes with a default message or use a custom message
git commit -m "Update: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# Push changes to the master branch (adjust branch name if needed)
git push origin master
