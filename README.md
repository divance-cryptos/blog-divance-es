# Divance.es frontend blog

### Requirements

- Node.js and npm

### Nextless.js SaaS Boilerplate

Build your SaaS product faster with [React SaaS Boilerplate](https://nextlessjs.com).

[![React SaaS Boilerplate Next.js](https://creativedesignsguru.com/assets/images/themes/next-js-saas-starter-kit.jpg)](https://nextlessjs.com)

### Premium Themes ([Nextjs Themes](https://creativedesignsguru.com/category/nextjs/))

| [Blue Dark Nextjs Theme](https://creativedesignsguru.com/blue-dark-nextjs-theme/) | [Blue Eclatant Nextjs Theme](https://creativedesignsguru.com/blue-eclatant-nextjs-theme/) |
| --- | --- |
| [![Blue Dark Nextjs Theme premium](https://creativedesignsguru.com/assets/images/themes/blue-dark-mode-nextjs-theme-homepage-xs.png)](https://creativedesignsguru.com/blue-dark-nextjs-theme/) | [![Blue Eclatant Nextjs Theme premium](https://creativedesignsguru.com/assets/images/themes/eclatant-blue-nextjs-theme-homepage-xs.png)](https://creativedesignsguru.com/blue-eclatant-nextjs-theme/) |

| [Blue Modern Nextjs Theme](https://creativedesignsguru.com/blue-modern-nextjs-theme/) | [Blue Minimalist Nextjs Theme](https://creativedesignsguru.com/blue-minimalist-nextjs-theme/) |
| --- | --- |
| [![Blue Modern Nextjs Theme premium](https://creativedesignsguru.com/assets/images/themes/modern-blue-nextjs-theme-homepage-xs.png)](https://creativedesignsguru.com/blue-modern-nextjs-theme/) | [![Blue Minimalist Nextjs Theme premium](https://creativedesignsguru.com/assets/images/themes/minimalist-blue-nextjs-theme-homepage-xs.png)](https://creativedesignsguru.com/blue-minimalist-nextjs-theme/) |

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/ixartz/Next-js-Blog-Boilerplate.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```
.
├── _posts            # Your blog posts
├── public            # Static files
│   ├── assets
│   │   └── images
│   │       └── posts # Images used in your blog posts
└── src
    ├── pages         # Next.js pages
    ├── styles        # Your blog CSS files
    └── templates     # Blog templates
```

### Customization

You can easily configure Next js Boilerplate. Please change the following file:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your blog favicon, you can generate from https://favicon.io/favicon-converter/
- `public/assets/images/logo.png`, `public/assets/images/logo-32x32.png`: your blog logo
- `src/styles/main.css`: your blog CSS file using Tailwind CSS
- `src/utils/Config.ts`: configuration file like blog name, url, etc.
- `src/templates/Main.tsx`: blog theme

### Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build-prod
```

Now, your blog is ready to be deployed. All generated files are located at `dist` folder, which you can deploy with any hosting service.

### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ixartz/Next-js-Blog-Boilerplate)

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2022

See [LICENSE](LICENSE) for more information.

---

Made with ♥ by [CreativeDesignsGuru](https://creativedesignsguru.com) [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40Ixartz)](https://twitter.com/ixartz)

[![Sponsor Next JS Boilerplate](https://cdn.buymeacoffee.com/buttons/default-red.png)](https://www.buymeacoffee.com/ixartz)
