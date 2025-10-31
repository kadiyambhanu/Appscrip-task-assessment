# Deployment Guide

## Prerequisites

1. GitHub account
2. Netlify account (free tier is sufficient)

## Step 1: Push Code to GitHub

1. Initialize git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Next.js e-commerce product listing page"
```

2. Create a new repository on GitHub named: `Appscrip-task-[your-name]`

3. Push your code:
```bash
git remote add origin https://github.com/[your-username]/Appscrip-task-[your-name].git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Netlify

### Option A: Using Netlify Web Interface

1. Go to [https://www.netlify.com/](https://www.netlify.com/)
2. Sign up or log in
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub account
5. Select your repository: `Appscrip-task-[your-name]`
6. Netlify will auto-detect Next.js settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Click "Deploy site"
8. Wait for deployment to complete
9. Your site will be available at: `https://[random-name].netlify.app`

### Option B: Using Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy:
```bash
netlify deploy --prod
```

## Step 3: Update Site Settings

1. Go to Site settings → Site details
2. Change site name to something more readable (optional)
3. Go to Domain settings to add a custom domain (optional)

## Step 4: Environment Variables (if needed)

If you need to add environment variables:
1. Go to Site settings → Environment variables
2. Add any required variables
3. Redeploy the site

## Step 5: Verify Deployment

1. Visit your Netlify URL
2. Check that:
   - ✅ Page loads correctly
   - ✅ Products are displayed
   - ✅ Navigation works
   - ✅ Footer is visible
   - ✅ Responsive design works on mobile
   - ✅ SEO meta tags are present (view page source)

## Troubleshooting

### Build fails
- Check build logs in Netlify dashboard
- Ensure `package.json` has correct scripts
- Verify Node.js version (Netlify uses Node 18 by default)

### Images not loading
- Check `next.config.js` for image domain configuration
- Verify image URLs are accessible

### API errors
- FakeStoreAPI should work without authentication
- Check network tab in browser dev tools
- Verify API endpoint is accessible

## Custom Domain (Optional)

1. In Netlify dashboard, go to Domain settings
2. Click "Add custom domain"
3. Enter your domain name
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take up to 24 hours)

## Continuous Deployment

Netlify automatically deploys when you push to the main branch. Every time you push changes:
1. Netlify detects the push
2. Runs `npm run build`
3. Deploys the new version
4. Updates your live site

Your site URL will be: `https://[your-site-name].netlify.app`

