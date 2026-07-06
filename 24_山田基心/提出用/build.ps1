$files = @(
    "js\constants.js",
    "js\blockPatterns.js",
    "js\pathfinder.js",
    "js\mapGenerator.js",
    "js\player.js",
    "js\enemyA.js",
    "js\enemyB.js",
    "js\uiManager.js",
    "js\main.js"
)

$output = "bundle.js"
Clear-Content $output -ErrorAction SilentlyContinue

foreach ($file in $files) {
    $content = Get-Content $file -Raw
    # Remove import statements
    $content = $content -replace '(?m)^import\s+.*$', ''
    # Remove export statements (keep the declaration)
    $content = $content -replace '(?m)^export\s+(const|let|var|class|function)', '$1'
    # Default exports? (e.g., export default class)
    $content = $content -replace '(?m)^export\s+default\s+(class|function)', '$1'
    
    Add-Content $output "/* --- $file --- */"
    Add-Content $output $content
    Add-Content $output "`n"
}

Write-Host "Bundle created: $output"
