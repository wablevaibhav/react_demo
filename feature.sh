#!/bin/bash

# Feature Generator Script for React Clean Architecture
# Usage: ./feature.sh

echo "🚀 Feature Generator - React Clean Architecture"
echo "=============================================="
echo ""

# Prompt for feature name
read -p "Enter feature name (e.g., auth, user_profile, configuration): " feature_name

# Validate input
if [ -z "$feature_name" ]; then
    echo "❌ Error: Feature name cannot be empty"
    exit 1
fi

# Convert to lowercase and replace spaces with underscores
feature_name=$(echo "$feature_name" | tr '[:upper:]' '[:lower:]' | tr ' ' '_' | tr '-' '_')

echo ""
echo "📦 Creating feature: $feature_name"
echo ""

# Base path
BASE_PATH="src/features/$feature_name"

# Create directory structure
mkdir -p "$BASE_PATH"/{api,services,stores,pages,components,hooks,utils,context}

# Create index.ts (barrel file)
cat > "$BASE_PATH/index.ts" << EOF
// Barrel file for $feature_name feature
// Export all public APIs, components, and utilities

// export { ${feature_name^}Page } from './pages/${feature_name^}Page';
// export { use${feature_name^} } from './hooks/use${feature_name^}';
// Add more exports as needed
EOF

# Create placeholder files
cat > "$BASE_PATH/api/${feature_name}Api.ts" << EOF
// API calls for $feature_name feature
// Example:
// export const fetchData = async () => {
//   const response = await fetch('/api/$feature_name');
//   return response.json();
// };

export {};
EOF

cat > "$BASE_PATH/services/${feature_name}Service.ts" << EOF
// Business logic for $feature_name feature
// Example:
// export const processData = (data: any) => {
//   // Business logic here
//   return transformedData;
// };

export {};
EOF

cat > "$BASE_PATH/stores/use${feature_name^}Store.ts" << EOF
// State management for $feature_name feature
// For Redux Toolkit or Zustand

export {};
EOF

cat > "$BASE_PATH/hooks/use${feature_name^}.ts" << EOF
import { useState } from 'react';

// Custom hook for $feature_name feature
export const use${feature_name^} = () => {
  const [data, setData] = useState(null);

  // Add your logic here

  return {
    data,
    setData,
  };
};
EOF

cat > "$BASE_PATH/utils/${feature_name}Utils.ts" << EOF
// Utility functions for $feature_name feature

export {};
EOF

# Create README for the feature
cat > "$BASE_PATH/README.md" << EOF
# ${feature_name^} Feature

## Description
Add a description of the $feature_name feature here.

## Structure
\`\`\`
$feature_name/
├── api/                # API calls
├── services/           # Business logic
├── store/              # State management
├── pages/              # Page components
├── components/         # UI components
├── hooks/              # Custom hooks
├── utils/              # Utility functions
├── context/            # Context providers
└── index.ts            # Barrel exports
\`\`\`

## Usage
\`\`\`typescript
import { ${feature_name^}Page } from '@/features/$feature_name';
\`\`\`
EOF

echo "✅ Feature structure created successfully!"
echo ""
echo "📁 Created folders:"
echo "   - $BASE_PATH/api"
echo "   - $BASE_PATH/services"
echo "   - $BASE_PATH/store"
echo "   - $BASE_PATH/pages"
echo "   - $BASE_PATH/components"
echo "   - $BASE_PATH/hooks"
echo "   - $BASE_PATH/utils"
echo "   - $BASE_PATH/context"
echo ""
echo "📄 Created files:"
echo "   - $BASE_PATH/index.ts"
echo "   - $BASE_PATH/api/${feature_name}Api.ts"
echo "   - $BASE_PATH/services/${feature_name}Service.ts"
echo "   - $BASE_PATH/stores/use${feature_name^}Store.ts"
echo "   - $BASE_PATH/hooks/use${feature_name^}.ts"
echo "   - $BASE_PATH/utils/${feature_name}Utils.ts"
echo "   - $BASE_PATH/README.md"
echo ""
echo "🎉 Done! Start building your $feature_name feature."
