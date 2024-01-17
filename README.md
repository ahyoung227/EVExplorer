```mermaid
# EVExplorer Project

## Goal
The primary goal of this project is to gain hands-on experience with new frameworks, experimenting with project structuring and exploring the intricacies of their adoption. This endeavor focuses on delving into the functionalities of upgraded frameworks, particularly emphasizing the creation of high-quality, reusable code and ensuring effective communication throughout the development process. 

## Project Period
January 5, 2024 ~ to January 8, 2024 (Ongoing)

## Functional Requirements

The idea for Functional Requirements came from the design suggestion for the 'evLife' software. While contemplating what to improve in the current app, I thought about it from the perspective of a user looking to buy an electric car. Rather than searching for brands or models one by one, I'd prefer considering and choosing from various options. Thus, I came up with the idea of 'ev cards.' Even though the design lacks incentives and personalized options, I believe most of the ideas are encapsulated in the functional requirements.

### View EV Information:
- Users can access a comprehensive list of EVs, providing detailed information about incentives, loans, EVLife Loan options, and fuel savings.

### Sort EVs by Incentives:
- Users have the capability to sort EVs based on high incentives.

### Search EVs:
- Users can conveniently search for specific EVs based on make and brand.

### Personal Rate Check:
- Users can input their information to check personalized rates.

### Responsive Design:
- The application features a responsive design, ensuring an optimal user experience across various devices.

## Tech Stack
- JavaScript/TypeScript
- Vue 3, Nuxt, Pinia
- REST API
- Tailwind UI
- Vite
- Vitest

## Demo
- [Main Page Demo-gif](https://github.com/ahyoung227/EVExplorer/blob/main/assets/demo/Mainpage.gif?raw=true)
- [Car Detail Page Demo-gif](https://github.com/ahyoung227/EVExplorer/blob/main/assets/demo/detail-page.gif)
- [Responsive Design Demo-gif](https://github.com/ahyoung227/EVExplorer/blob/main/assets/demo/reponsive-design.gif)

## Closing Remarks and Limitations
This project is solely composed of frontend development, lacking a seamless integration with backend functionalities. The use of a fake car API limits the representation of electric car details, actual incentives, and the ability to make post or update requests. Key aspects like pagination, update, and post requests were not implemented, relying on frontend logic for sorting and searching. The project assumes the presence of backend support for features like actual incentives and personalized loan information, which were not provided. The information from the car fake API can be found here.

# Installation

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

```
