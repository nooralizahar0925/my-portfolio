# Deploy this portfolio on Vercel

The portfolio is a static React + TypeScript + Vite application. It needs no backend, database, or environment variables.

## Import the repository

1. Sign in to [Vercel](https://vercel.com/) with GitHub.
2. Open [New Project](https://vercel.com/new).
3. Import `nooralizahar0925/my-portfolio`. If it is not listed, grant the Vercel GitHub integration access to this repository.
4. Confirm the settings below, then click **Deploy**.

| Setting | Value |
| --- | --- |
| Repository | `nooralizahar0925/my-portfolio` |
| Production branch | `main` |
| Framework preset | Vite |
| Root directory | Repository root; leave the default (`./`) |
| Build command | `npm run build` |
| Output directory | `dist` |
| Install command | `npm ci` |
| Node.js version | `22.x`, matching GitHub Actions |
| Environment variables | None |

The included `vercel.json` already sets the framework, build command, and output directory. If Node.js settings are not shown during import, select the project after import and use **Settings → Build and Deployment → Node.js Version**.

After a successful deployment, open the generated Vercel URL to view the portfolio. For this site, navigation uses page anchors such as `#work` and `#education`; no additional routing rewrites are needed.

## Future updates

Once the repository is connected, pushes to the production branch (`main`) normally trigger a new production deployment automatically. Check its progress under the project's Deployments page. GitHub Actions separately validates the production build.

If this repository is already imported, use the existing Vercel project. Confirm that its production branch is `main` and its configuration matches the table above. To rebuild the latest source manually, use **Redeploy** from the latest deployment's menu.

## Official references

- [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite)
- [Supported Node.js versions and project settings](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions)
- [Production deployments and branch tracking](https://vercel.com/docs/deployments/environments)
