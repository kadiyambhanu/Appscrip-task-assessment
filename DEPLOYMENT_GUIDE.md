# Deployment Guide

This guide will help you deploy the React/Next.js product listing page to Netlify.

## Prerequisites

- Node.js 18+ installed
- Git installed
- Netlify account (free tier works)
- GitHub account (optional, for auto-deploys)

## Step 1: Build the Application

The application has already been built. If you need to rebuild:

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## Step 2: Initialize Git Repository (if not already done)

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Product listing page with React and responsive design"
```

## Step 3: Push to GitHub (Optional but Recommended)

1. Create a new repository on GitHub (don't initialize with README)
2. Link your local repository:

```bash
# Add remote repository (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -b main
git push -u origin main
```

## Step 4: Deploy to Netlify

### Option A: Deploy via Netlify UI (Drag & Drop)

1. Go to [app.netlify.com](https://app.netlify.com/)
2. Sign in or create an account
3. Click "Add new site" → "Deploy manually"
4. Drag and drop the `.next` folder **OR** the entire project folder
5. Netlify will automatically detect Next.js and use the configuration from `netlify.toml`

**Note:** For Next.js, it's better to connect via Git (Option B) as Netlify needs the source files to build properly.

### Option B: Deploy via Git (Recommended)

1. Go to [app.netlify.com](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub/GitLab/Bitbucket
4. Select your repository
5. Netlify will auto-detect Next.js settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Node version:** 18 (set in netlify.toml)
6. Click "Deploy site"

### Option C: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy (in project directory)
netlify deploy --prod
```

## Step 5: Environment Variables (if needed)

If you need to add environment variables:
1. Go to Site settings → Environment variables
2. Add any required variables (e.g., API keys)

**Note:** The Fake Store API doesn't require API keys, so no environment variables are needed for this project.

## Step 6: Verify Deployment

1. Once deployed, Netlify will provide a URL like: `https://your-site-name.netlify.app`
2. Test the following:
   - ✅ Products load from API
   - ✅ Filters work correctly
   - ✅ Sorting functionality works
   - ✅ Responsive design on mobile/tablet/desktop
   - ✅ SEO meta tags are present (check page source)

## CORS Note

The Fake Store API (`https://fakestoreapi.com`) supports CORS, so it should work without issues from Netlify. If you encounter CORS errors, you may need to:
- Use a proxy
- Set up Netlify Functions to proxy the API calls

## Testing Checklist

- [ ] Site loads correctly
- [ ] Products display from API
- [ ] Filter checkbox works
- [ ] Sort dropdown works
- [ ] Mobile responsive (test on mobile device or Chrome DevTools)
- [ ] Tablet responsive (test at 768px width)
- [ ] Desktop layout (test at 1200px+ width)
- [ ] SEO meta tags present (view page source)
- [ ] Schema.org JSON-LD present (view page source, search for "schema.org")

## Troubleshooting

### Build fails
- Check Node.js version (should be 18+)
- Run `npm install` to ensure dependencies are installed
- Check `netlify.toml` configuration

### API not loading
- Check browser console for errors
- Verify CORS headers (Fake Store API should work)
- Check network tab for failed requests

### Images not loading
- Verify image domains in `next.config.js`
- Check if placeholder images are working

## Sharing Your Deployment

Once deployed, share:
1. **Netlify URL:** `https://your-site-name.netlify.app`
2. **GitHub Repository:** `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME`

## Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Netlify Next.js Plugin](https://github.com/netlify/netlify-plugin-nextjs)

