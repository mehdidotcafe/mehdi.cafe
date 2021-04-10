npm run build &&
git add --all &&
git commit -m "$1" &&
git push origin HEAD &&
echo "cd meddou.com && git pull origin HEAD" | ssh u96288558@access770638397.webspace-data.io



