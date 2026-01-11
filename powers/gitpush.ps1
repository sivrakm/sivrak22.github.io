cd E:\madmania\apps\gym\
Write-Host "Press any key to continue..."
$x = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
npm run build
Write-Host "Press any key to continue..."
$x = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
Copy-Item -Path 'E:\madmania\apps\gym\dist\*' -Destination 'E:\github\sivrak22.github.io\spd' -Recurse -Force
cd E:\github\sivrak22.github.io\spd\
Write-Host "Press any key to continue..."
$x = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
git add .
git commit -m "update build"
git push
Write-Host "Press any key to continue..."
$x = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")