
# WebCraft AI Deployment Guide

## Automatic GitHub Pages Deployment

WebCraft AI is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Automatic Deployment**:
   - Every push to the `main` branch triggers automatic deployment
   - The workflow builds the app and deploys to GitHub Pages
   - Your app will be available at: `https://yourusername.github.io/webcraft-ai/`

### Manual Deployment

If you prefer manual deployment:

```bash
# Make the deploy script executable
chmod +x scripts/deploy.sh

# Run the deployment script
./scripts/deploy.sh
```

### Configuration

The deployment is configured in:
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `vite.config.ts` - Base path configuration for GitHub Pages

### Environment Variables

For production deployment, you may need to set:
- `VITE_GITHUB_CLIENT_ID` - For GitHub integration
- `VITE_PUTER_API_URL` - For Puter.js services

### Custom Domain

To use a custom domain:
1. Add a `CNAME` file to the `public` directory with your domain
2. Configure DNS settings for your domain
3. Enable custom domain in repository settings

### Troubleshooting

- **Build fails**: Check console logs in GitHub Actions
- **404 errors**: Ensure base path is correctly configured
- **Assets not loading**: Verify all paths are relative
