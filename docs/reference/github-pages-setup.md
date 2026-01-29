# GitHub Pages setup for this site

The site is built and deployed by the workflow in `.github/workflows/deploy.yml`.

## Set Pages to use GitHub Actions (gh CLI)

From the repo root, with [GitHub CLI](https://cli.github.com/) installed and authenticated:

```bash
gh api -X PUT repos/llorracc/JHUSocSciComputation/pages \
  -f build_type=workflow -f 'source[branch]=main' -f 'source[path]=/'
```

To verify:

```bash
gh api repos/llorracc/JHUSocSciComputation/pages --jq '{ build_type, html_url }'
```

## Why the site might not render

**Most likely:** GitHub Pages is still using **Deploy from a branch** instead of **GitHub Actions**.  
Until you switch the source, the workflow can run successfully but Pages will not serve the built site.

**Fix:**

1. On GitHub, open the repo **Settings**.
2. In the left sidebar, open **Pages** (under “Code and automation”).
3. Under **Build and deployment** → **Source**, choose **GitHub Actions** (not “Deploy from a branch”).

After that, the next push to `main` (or a re-run of the “MyST GitHub Pages Deploy” workflow) will deploy the built site to:

**https://llorracc.github.io/JHUSocSciComputation**

## If it still doesn’t work

- In the repo, open the **Actions** tab and check the latest “MyST GitHub Pages Deploy” run. If the build or deploy step fails, the logs there will show the error.
- Ensure the run completed successfully (green check). Only successful runs update the live site.
