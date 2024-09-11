1. Welcome to Alta3 Live
2. 💻 Register for Poll
3. Vim: A Modal Text Editor
4. Efficient CLI Usage with Tmux
5. Revision Control with GitHub
Day 1: Foundations and Core Concepts
6. 💻 Introduction to Next.js and Setup
7. 💬 Advanced React Features in Next.js
8. 💻 Advanced React Features in Next.js Lab
9. 💬 Next.js Routing and Navigation
10. 💻 Next.js Routing and Navigation Lab
11. 💻 Data Fetching Strategies
12. 💬 Server-Side Rendering (SSR) and Static Site Generation (SSG)
13. 💻 Advanced SSR and SSG Techniques
14. 💬 State Management in Next.js
15. 💻 State Management Deep Dive Context API vs Redux in Next.js
16. 💻 Custom Image Optimization Component
Day 2: Advanced Features and Optimizations
17. 💻 Advanced State Management
18. 💻 API Handling and Data Integration in Next.js
19. 💻 Advanced API Integrations with Apollo
20. 💻 GraphQL Integration with Server-Side Rendering
21. 💻 Authentication and Authorization
22. 💻 Server-Side Caching Strategies
23. 💻 Real-Time Data with Next.js and WebSockets
24. 💻 Error Handling and Logging
Day 3: Scaling and Advanced Architectures
25. 💻 Hot Swapping Virtual DOMs
26. 💻 Using App Router
27. 💬 Testing in Next.js
28. 💻 Testing in Next.js Lab
29. 💬 Lecture on Microfrontend Architecture and re-usable components
30. 💻 Reusable Components and React.forwardRef
31. 💻 Next.js Multi Zones
32. 💻 Monorepo Setup with Turborepo
33. 💻 Advanced SEO and Analytics
34. 💻 Using 3rd Party Libraries and Reusable Components



Advanced NextJS
Setting Up a Monorepo with Turborepo
Lab Objective
In this lab, you will set up a monorepo using Turborepo with Next.js, explore Turborepo's advanced features like parallel task execution and caching, and create and publish a reusable package. You will learn how to properly configure Babel to transpile JSX in shared packages across multiple Next.js applications.

Procedure
If you are currently on bchd then move into `node.

student@bchd:~$ ssh node

Navigate to your project directory.

student@node:~$ cd ~/mycode

Create the base directory for your monorepo and initialize a new npm project:

student@node:~/mycode$ mkdir turbo-monorepo && cd turbo-monorepo

student@node:~/mycode$ npm init -y

student@node:~/mycode$ npm install --save-dev turbo

Explanation: You’re setting up the base directory for your monorepo, initializing it with npm, and installing Turborepo to manage the monorepo's tasks and dependencies.

Set Up Turborepo
Add a script in package.json to run Turborepo:

student@node:~/mycode/turbo-monorepo$ vim package.json

Replace the file content with:

{
  "name": "turbo-monorepo",
  "version": "1.0.0",
  "scripts": {
    "turbo": "turbo"
  },
  "devDependencies": {
    "turbo": "^2.1.1"
  }
}
Initialize the Turborepo monorepo structure. This will take a while!

student@node:~/mycode/turbo-monorepo$ npx create-turbo@latest

Press Enter to any prompts to accept default values.

Explanation: This command scaffolds a new monorepo structure with Turborepo configuration, including a turbo.json file and a basic Next.js app.

Set Up Applications in the Monorepo
Create two Next.js applications inside the apps directory. Make sure that you say NO to everything!

student@node:~/mycode/turbo-monorepo$ cd my-turborepo

student@node:~/mycode/turbo-monorepo/my-turborepo$ mkdir -p apps

student@node:~/mycode/turbo-monorepo/my-turborepo$ cd apps

student@node:~/mycode/turbo-monorepo/my-turborepo/apps$ npx create-next-app@latest my-next-app

student@node:~/mycode/turbo-monorepo/my-turborepo/apps$ npx create-next-app@latest another-next-app

Check the structure (this isn't a command, don't copy/paste it):

my-turborepo/
├── apps/
│   ├── my-next-app/
│   └── another-next-app/
└── turbo.json
Properly Configure Babel and Webpack for Shared Components
To ensure that the shared components work properly, we need to configure Babel to handle JSX across the monorepo and transpile the shared package. We need to do this in both projects. To do this we will split into two TMUX panes and run these commands back and forth in both directories. Each pane will be dedicated to a project.

We need to install babel-loader in both apps. Head to the first one.

student@node:~$ cd ~/mycode/turbo-monorepo/my-turborepo/apps/my-next-app/

Install our dependencies.

student@node:~/mycode/turbo-monorepo/my-turborepo/apps/my-next-app/$ npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react

While we're here, we'll install next-transpile-modules to handle transpiling external shared packages. Next.js doesn’t transpile external packages by default, so we need to explicitly tell it to transpile the shared package.

student@node:~/mycode/turbo-monorepo/my-turborepo/apps/my-next-app/$ npm install next-transpile-modules

Head to your other app.

student@node:~/mycode/turbo-monorepo/my-turborepo/apps/my-next-app/$ cd ~/mycode/turbo-monorepo/my-turborepo/apps/another-next-app

Install there too.

student@node:~/mycode/turbo-monorepo/my-turborepo/apps/another-next-app$ npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react

student@node:~/mycode/turbo-monorepo/my-turborepo/apps/another-next-app$ npm install next-transpile-modules

Create a .babelrc file in your current app.

student@node:~/mycode/turbo-monorepo/my-turborepo/apps/another-next-app$ vim .babelrc

{
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ]
}
Make the same in your other app.

student@node:~/mycode/turbo-monorepo/my-turborepo/apps/another-next-app$ vim ~/mycode/turbo-monorepo/my-turborepo/apps/my-next-app/.babelrc

{
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ]
}
We'll also need to update next.config.js for both apps to ensure the shared components are transpiled properly. Open the one in your current app.

student@node:~/mycode/turbo-monorepo/my-turborepo/apps/another-next-app$ vim next.config.js

Replace the file content with:

const withTM = require('next-transpile-modules')(['my-shared-components']);

module.exports = withTM({});
Do that in your other app as well.

student@node:~/mycode/turbo-monorepo/my-turborepo/apps/another-next-app$ vim ~/mycode/turbo-monorepo/my-turborepo/apps/my-next-app/next.config.js

Replace the file content with:

const withTM = require('next-transpile-modules')(['my-shared-components']);

module.exports = withTM({});
Set Up and Link Shared Components
Head to your main directory.

student@node:~/mycode/turbo-monorepo/my-turborepo/apps/another-next-app$ cd ~/mycode/turbo-monorepo/my-turborepo

Create a reusable package inside the packages directory.

student@node:~/mycode/turbo-monorepo/my-turborepo/packages/my-shared-components$

mkdir -p packages/my-shared-components && cd packages/my-shared-components
npm init -y
Create a .babelrc file in the shared package. You need to ensure that the shared package itself can transpile JSX. Create a .babelrc file inside my-shared-components:

student@node:~/mycode/turbo-monorepo/my-turborepo/packages/my-shared-components$ vim .babelrc

Add the following:

{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
Develop a reusable ProductCard component:

student@node:~/mycode/turbo-monorepo/my-turborepo/packages/my-shared-components$ mkdir -p src && vim src/ProductCard.js

Add the following code:

import React from 'react';

const ProductCard = ({ title, description, price, imageUrl }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '20px',
      textAlign: 'center',
      maxWidth: '300px',
      margin: '0 auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <img src={imageUrl} alt={title} style={{ width: '100%', borderRadius: '10px' }} />
      <h2 style={{ fontSize: '1.5em', margin: '15px 0 10px', color: '#333' }}>{title}</h2>
      <p style={{ color: '#777' }}>{description}</p>
      <p style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{price}</p>
    </div>
  );
};

export default ProductCard;
Explanation: This component is reusable across both apps, demonstrating the power of shared components in a monorepo.

Link the package to both Next.js apps:

student@node:~/mycode/turbo-monorepo/my-turborepo/packages/my-shared-components$ npm link

Head back to your first app and link it as well.

student@node:~/mycode/turbo-monorepo/my-turborepo/packages/my-shared-components$

cd ~/mycode/turbo-monorepo/my-turborepo/apps/my-next-app/
npm link my-shared-components
Now go to your other app and link it too.

student@node:~/mycode/turbo-monorepo/my-turborepo/apps/my-next-app$

cd ~/mycode/turbo-monorepo/my-turborepo/apps/another-next-app
npm link my-shared-components
Use the Shared ProductCard Component in Both Apps
Now let’s use the shared ProductCard component in the home page of my-next-app.

student@node:~/mycode/turbo-monorepo/my-turborepo/apps/another-next-app cd ~/mycode/turbo-monorepo/my-turborepo/apps/my-next-app && vim pages/index.js

Replace the file content with:

import React from 'react';
import ProductCard from 'my-shared-components/src/ProductCard';

const Home = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5em', color: '#333' }}>Welcome to Bill's Wacky Science Stuff</h1>
      <ProductCard
        title="Quantum Widget"
        description="A revolutionary widget that alters the fabric of reality."
        price="$299.99"
        imageUrl="https://static.alta3.com/images/quantum_widget.webp"
      />
    </div>
  );
};

export default Home;
Explanation: This sets up the ProductCard to be displayed on the home page of my-next-app and uses the shared component.

Similarly, we’ll use the ProductCard component in another-next-app but with different content to showcase how the same component can be reused.

student@node:~/mycode/turbo-monorepo/my-turborepo/apps/my-next-app/ cd ~/mycode/turbo-monorepo/my-turborepo/apps/another-next-app && vim pages/index.js

Replace the file content with:

import React from 'react';
import ProductCard from 'my-shared-components/src/ProductCard';

const Home = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5em', color: '#333' }}>Welcome to Becca's Fantastic Space Place</h1>
      <ProductCard
        title="Interstellar Gadget"
        description="A gadget from another galaxy with advanced technology."
        price="$499.99"
        imageUrl="https://static.alta3.com/images/interstellar_gadget.webp"
      />
    </div>
  );
};

export default Home;
Explanation: This example uses the same ProductCard component, but with different content, demonstrating the power of reusable components in different contexts.

Run the Development Servers
It's now time to launch the development server for my-next-app! You are going to need two panes for this. In your current pane, do the following:

student@node:~/mycode/turbo-monorepo/my-turborepo/apps/another-next-app cd ~/mycode/turbo-monorepo/my-turborepo/apps/my-next-app/

student@node:~/mycode/turbo-monorepo/my-turborepo/apps/my-next-app/ npm run dev

Split TMUX with ctrl b, hands off, then ". Then in the new pane do the following.

student@bchd~$ ssh node

student@node~$ cd ~/mycode/turbo-monorepo/my-turborepo/apps/another-next-app

student@node:~/mycode/turbo-monorepo/my-turborepo/apps/another-next-app$ npm run dev -- -p 8080

Visit and review your sites

Navigate to Aux-1 and Aux-2 in your browser, and observe how a single shared component from a turbo-repo was used in two separate apps!

Conclusion
In this lab, you successfully set up a monorepo using Turborepo with Next.js. You explored Turborepo's features like parallel task execution and caching, created a reusable ProductCard component, and shared it across different applications within the monorepo.

Optional Exercises
Advanced Turborepo Configuration: Explore more advanced Turborepo features, like custom tasks or changing dependencies between apps.
Add More Shared Components: Build and share more components across your apps.
CI/CD for Monorepos: Explore setting up a continuous integration (CI) pipeline using services like GitHub Actions or Jenkins.
Alta3 Logo

