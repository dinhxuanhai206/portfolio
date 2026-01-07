#!/bin/bash

# 🚀 Portfolio Deployment Setup Script
# This script helps you setup CI/CD with GitHub Actions and Vercel

set -e

echo "🎨 Portfolio Deployment Setup"
echo "=============================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if git is initialized
if [ ! -d .git ]; then
    echo -e "${YELLOW}⚠️  Git not initialized. Initializing...${NC}"
    git init
    echo -e "${GREEN}✓ Git initialized${NC}"
fi

# Check if remote exists
if ! git remote | grep -q origin; then
    echo ""
    echo -e "${BLUE}📝 Enter your GitHub repository URL:${NC}"
    read -p "URL (e.g., https://github.com/username/repo.git): " REPO_URL
    git remote add origin "$REPO_URL"
    echo -e "${GREEN}✓ Remote added${NC}"
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo ""
    echo -e "${YELLOW}⚠️  Vercel CLI not found. Installing...${NC}"
    npm install -g vercel
    echo -e "${GREEN}✓ Vercel CLI installed${NC}"
fi

# Login to Vercel
echo ""
echo -e "${BLUE}🔐 Logging in to Vercel...${NC}"
vercel login

# Link project
echo ""
echo -e "${BLUE}🔗 Linking Vercel project...${NC}"
vercel link

# Get project info
if [ -f .vercel/project.json ]; then
    PROJECT_ID=$(cat .vercel/project.json | grep projectId | cut -d'"' -f4)
    ORG_ID=$(cat .vercel/project.json | grep orgId | cut -d'"' -f4)
    
    echo ""
    echo -e "${GREEN}✓ Project linked successfully!${NC}"
    echo ""
    echo -e "${YELLOW}📋 Your Vercel Project Info:${NC}"
    echo -e "${BLUE}Project ID:${NC} $PROJECT_ID"
    echo -e "${BLUE}Org ID:${NC} $ORG_ID"
    echo ""
    echo -e "${YELLOW}⚠️  IMPORTANT: Add these to GitHub Secrets${NC}"
    echo ""
    echo "1. Go to: https://github.com/$(git remote get-url origin | sed 's/.*github.com[:/]\(.*\)\.git/\1/')/settings/secrets/actions"
    echo ""
    echo "2. Add these secrets:"
    echo -e "   ${BLUE}VERCEL_PROJECT_ID${NC} = $PROJECT_ID"
    echo -e "   ${BLUE}VERCEL_ORG_ID${NC} = $ORG_ID"
    echo -e "   ${BLUE}VERCEL_TOKEN${NC} = [Get from https://vercel.com/account/tokens]"
    echo ""
else
    echo -e "${RED}✗ Failed to link project${NC}"
    exit 1
fi

# Check if .github/workflows exists
if [ ! -d .github/workflows ]; then
    echo -e "${YELLOW}⚠️  Creating .github/workflows directory...${NC}"
    mkdir -p .github/workflows
fi

# Check if workflow file exists
if [ ! -f .github/workflows/ci-cd.yml ]; then
    echo -e "${YELLOW}⚠️  Workflow file not found. Please ensure ci-cd.yml exists.${NC}"
fi

# Commit and push
echo ""
echo -e "${BLUE}📦 Ready to commit and push?${NC}"
read -p "Commit message (or press Enter to skip): " COMMIT_MSG

if [ ! -z "$COMMIT_MSG" ]; then
    git add .
    git commit -m "$COMMIT_MSG"
    
    echo ""
    echo -e "${BLUE}🚀 Pushing to GitHub...${NC}"
    git push -u origin main || git push -u origin master
    
    echo ""
    echo -e "${GREEN}✓ Code pushed successfully!${NC}"
fi

# Final instructions
echo ""
echo -e "${GREEN}🎉 Setup Complete!${NC}"
echo ""
echo -e "${YELLOW}Next Steps:${NC}"
echo "1. ✅ Add GitHub Secrets (see info above)"
echo "2. ✅ Create a Vercel token at: https://vercel.com/account/tokens"
echo "3. ✅ Push code to trigger CI/CD"
echo "4. ✅ Check GitHub Actions: https://github.com/$(git remote get-url origin | sed 's/.*github.com[:/]\(.*\)\.git/\1/')/actions"
echo ""
echo -e "${BLUE}📚 Full guide: See DEPLOY-GUIDE.md${NC}"
echo ""
