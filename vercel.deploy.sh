# deploy.sh

#!/usr/bin/env sh

# abort on errors
set -e

vercel build

vercel deploy --prebuilt
