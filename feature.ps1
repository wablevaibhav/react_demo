# Feature Generator Script for React Clean Architecture
# PowerShell version
# Usage: .\feature.ps1

Write-Host "🚀 Feature Generator - React Clean Architecture" -ForegroundColor Cyan
Write-Host "==============================================" -ForegroundColor Cyan
Write-Host ""

# Prompt for feature name
$featureName = Read-Host "Enter feature name (e.g., auth, user_profile, configuration)"

# Validate input
if ([string]::IsNullOrWhiteSpace($featureName)) {
    Write-Host "❌ Error: Feature name cannot be empty" -ForegroundColor Red
    exit 1
}

# Convert to lowercase and replace spaces/hyphens with underscores
$featureName = $featureName.ToLower() -replace '[ -]', '_'
$featureNamePascal = (Get-Culture).TextInfo.ToTitleCase($featureName) -replace '_', ''

Write-Host ""
Write-Host "📦 Creating feature: $featureName" -ForegroundColor Green
Write-Host ""

# Base path
$basePath = "src\features\$featureName"

# Create directory structure
$folders = @("api", "services", "stores", "pages", "components", "hooks", "utils", "context")
foreach ($folder in $folders) {
    New-Item -ItemType Directory -Force -Path "$basePath\$folder" | Out-Null
}

# Create index.ts (barrel file)
$indexContent = @"
// Barrel file for $featureName feature
// Export all public APIs, components, and utilities

// export { ${featureNamePascal}Page } from './pages/${featureNamePascal}Page';
// export { use$featureNamePascal } from './hooks/use$featureNamePascal';
// Add more exports as needed
"@
Set-Content -Path "$basePath\index.ts" -Value $indexContent

# Create API file
$apiContent = @"
// API calls for $featureName feature
// Example:
// export const fetchData = async () => {
//   const response = await fetch('/api/$featureName');
//   return response.json();
// };

export {};
"@
Set-Content -Path "$basePath\api\${featureName}Api.ts" -Value $apiContent

# Create service file
$serviceContent = @"
// Business logic for $featureName feature
// Example:
// export const processData = (data: any) => {
//   // Business logic here
//   return transformedData;
// };

export {};
"@
Set-Content -Path "$basePath\services\${featureName}Service.ts" -Value $serviceContent

# Create store file
$storeContent = @"
// State management for $featureName feature
// For Redux Toolkit or Zustand

export {};
"@
Set-Content -Path "$basePath\stores\use${featureNamePascal}Store.ts" -Value $storeContent

# Create hook file
$hookContent = @"
import { useState } from 'react';

// Custom hook for $featureName feature
export const use$featureNamePascal = () => {
  const [data, setData] = useState(null);

  // Add your logic here

  return {
    data,
    setData,
  };
};
"@
Set-Content -Path "$basePath\hooks\use$featureNamePascal.ts" -Value $hookContent

# Create utils file
$utilsContent = @"
// Utility functions for $featureName feature

export {};
"@
Set-Content -Path "$basePath\utils\${featureName}Utils.ts" -Value $utilsContent

# Create README
$readmeContent = @"
# $featureNamePascal Feature

## Description
Add a description of the $featureName feature here.

## Structure
``````
$featureName/
├── api/                # API calls
├── services/           # Business logic
├── store/              # State management
├── pages/              # Page components
├── components/         # UI components
├── hooks/              # Custom hooks
├── utils/              # Utility functions
├── context/            # Context providers
└── index.ts            # Barrel exports
``````

## Usage
``````typescript
import { ${featureNamePascal}Page } from '@/features/$featureName';
``````
"@
Set-Content -Path "$basePath\README.md" -Value $readmeContent

Write-Host "✅ Feature structure created successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "📁 Created folders:" -ForegroundColor Yellow
foreach ($folder in $folders) {
    Write-Host "   - $basePath\$folder" -ForegroundColor Gray
}
Write-Host ""
Write-Host "📄 Created files:" -ForegroundColor Yellow
Write-Host "   - $basePath\index.ts" -ForegroundColor Gray
Write-Host "   - $basePath\api\${featureName}Api.ts" -ForegroundColor Gray
Write-Host "   - $basePath\services\${featureName}Service.ts" -ForegroundColor Gray
Write-Host "   - $basePath\store\${featureName}Slice.ts" -ForegroundColor Gray
Write-Host "   - $basePath\hooks\use${featureNamePascal}.ts" -ForegroundColor Gray
Write-Host "   - $basePath\utils\${featureName}Utils.ts" -ForegroundColor Gray
Write-Host "   - $basePath\README.md" -ForegroundColor Gray
Write-Host ""
Write-Host "🎉 Done! Start building your $featureName feature." -ForegroundColor Cyan
