# :pushpin: Table of Contents

- [Demo Website](#eyes-demo-website)
- [Technologies](#computer-technologies)
- [Features](#rocket-features)
- [How to Run](#construction_worker-how-to-run)

# :eyes: Demo Website

![image](https://github.com/gguilherme-gritti/gguilherme-gritti/assets/78884167/b5da3751-7260-4e5c-a867-d91775c3824d)

# :computer: Technologies

The technologies used in the project:

- [Typescript](https://www.typescriptlang.org/)
  - for typing and better visualization of parameters
- [React](https://reactjs.org/)
  - one of the most versatile and used technologies on the market
- [Next.js](https://nextjs.org/)
  - for better performance with server-side rendering
- [ReactQuery](https://react-query-v3.tanstack.com)
  - to perform data fetching and cache data, avoiding unnecessary requests
- [Styled-Components](https://styled-components.com)
  - css in js to apply a theme according to a design token
- [Jest](https://jestjs.io/pt-BR/)
  - to perform tests on the component and ensure software and code quality
- [Testing-Library](https://testing-library.com)
  - to perform tests on the component and ensure software and code quality
- [Axios](https://axios-http.com)
  - handle requests with authentication and error interceptors
- [Skynex-ui](https://skynexui.dev)
  - to create the BaseComponent, a component for components
- [StoryBook](https://storybook.js.org/addons/@storybook/addon-styling)
  - to document the created components

# :rocket: Features

Testing application, ReactQuery fetching an public API that returns a list of notices, with a UI and Responsive front design

# :construction_worker: How to run

Require Node, Yarn

```bash
# Clone Repository
$ git clone https://github.com/gguilherme-gritti/design-google-news.git
```

```bash
# Change to correctly directory
$ cd google-design-news
```

Create a '.env.local' file, with the values:

- NEXT_PUBLIC_API_NEWS = "https://newsapi.org/v2"
- NEXT_PUBLIC_NEWS_API_KEY = "d20e279c51cd46e4b332c82eb676ea3c"

We need to do this to access de environment variables

### 💻 Run Web Project

```bash
# Install Dependencies
$ yarn install

# Run Aplication
$ yarn dev
```

Go to http://localhost:3000/ to see the result.
