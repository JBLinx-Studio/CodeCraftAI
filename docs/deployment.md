
# CodeCraft AI - Deployment Guide

## Automatic Deployment with GitHub Actions

This project is configured for automatic deployment using GitHub Actions. The workflow is triggered on every push to the main branch.

### GitHub Pages Setup

1. **Repository Settings**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Workflow Configuration**
   - The workflow file is located at `.github/workflows/deploy.yml`
   - Automatically builds and deploys on push to main branch
   - Uses Node.js 18 and npm for dependency management

3. **Permissions**
   - Ensure your repository has Pages enabled
   - The workflow has proper permissions for deployment

## Build Process

### Production Build
```bash
npm run build
```

This creates an optimized build in the `dist` folder with:
- Code splitting for better performance
- Vendor chunk separation
- Optimized assets and minification

### Environment Variables
- Configure API endpoints in your deployment environment
- Set up authentication keys as repository secrets
- Database connection strings (if using backend services)

## Deployment Platforms

### GitHub Pages (Recommended)
- **Setup**: Already configured with GitHub Actions
- **Custom Domain**: Configure in repository settings
- **SSL**: Automatically provided by GitHub
- **Deployment**: Automatic on every push

### Netlify
1. Connect GitHub repository
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy automatically on push

### Vercel
1. Import GitHub project
2. Configure environment variables
3. Deploy with zero configuration
4. Automatic deployments on push

### Custom Server
1. Build the application: `npm run build`
2. Serve static files from `dist` directory
3. Configure reverse proxy if needed
4. Set up SSL certificates

## Performance Optimizations

### Build Optimizations
- Tree shaking for unused code elimination
- Code splitting with manual chunks
- Asset optimization and compression
- Source map generation disabled for production

### Runtime Optimizations
- Lazy loading for route components
- Image optimization with proper formats
- CDN configuration for static assets
- Browser caching strategies

## Monitoring and Analytics

### Performance Monitoring
- Lighthouse CI integration (optional)
- Core Web Vitals tracking
- Bundle size analysis

### Error Tracking
- Configure error tracking service
- Monitor deployment success/failures
- Set up alerts for critical issues

## Security Best Practices

### GitHub Actions Security
- Use pinned action versions
- Secure secrets management
- Minimal required permissions
- Regular dependency updates

### Deployment Security
- HTTPS enforcement
- Content Security Policy headers
- Secure headers configuration
- API rate limiting (if applicable)

## Troubleshooting

### Common Deployment Issues

1. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Review build logs in Actions tab

2. **Asset Loading Issues**
   - Ensure correct base path configuration
   - Check relative/absolute path references
   - Verify asset optimization settings

3. **GitHub Pages 404 Errors**
   - Check repository Pages settings
   - Verify workflow permissions
   - Ensure dist folder is properly uploaded

### Debugging Steps

1. **Local Testing**
   ```bash
   npm run build
   npm run preview
   ```

2. **Action Logs**
   - Review GitHub Actions workflow logs
   - Check individual step outputs
   - Verify artifact uploads

3. **Browser Developer Tools**
   - Check console for JavaScript errors
   - Verify network requests succeed
   - Inspect loaded resources

## Custom Domain Configuration

### GitHub Pages Custom Domain
1. Add CNAME file to public directory
2. Configure DNS settings:
   - CNAME record pointing to `username.github.io`
   - A records for apex domain (optional)
3. Enable HTTPS in repository settings

### DNS Configuration
```
Type    Name    Value
CNAME   www     username.github.io
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
```

## Environment-Specific Builds

### Development
- Source maps enabled
- Hot module replacement
- Development optimizations

### Staging
- Production build with debugging
- Source maps for error tracking
- Performance monitoring

### Production
- Fully optimized build
- No source maps
- Maximum compression
- CDN integration
