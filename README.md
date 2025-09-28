# Retro WarpDrive FX

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)]([![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Jaythatskywalker/warpdrive-starfield-effect1))

An immersive, single-page web application designed to showcase a visually stunning, retro-themed faster-than-lightspeed (FTL) warp travel animation. The experience is presented from a first-person cockpit perspective, evoking the nostalgic feel of 90s sci-fi video games and movies.

The core of the application is an HTML5 canvas element rendering a dynamic starfield. Stars will streak from a central vanishing point, accelerating to create a convincing tunnel effect of FTL travel. The visual aesthetic is enhanced with retro effects like CRT scan lines, a subtle grainy texture, and glitch-like artifacts. A minimalist, non-interactive Heads-Up Display (HUD) overlay with glowing neon text provides context, displaying information like 'WARP ENGAGED' and 'SYSTEMS: NOMINAL', further cementing the old-school sci-fi atmosphere.

## Key Features

-   **Immersive FTL Animation:** A dynamic, canvas-based starfield that simulates faster-than-light travel.
-   **Retro 90s Aesthetic:** Inspired by classic sci-fi, featuring CRT scan lines, grain, and glitch effects.
-   **First-Person Perspective:** Puts the user in the cockpit for a captivating visual experience.
-   **Minimalist HUD:** A non-interactive, glowing Heads-Up Display enhances the theme.
-   **High Performance:** Optimized rendering using `requestAnimationFrame` for a smooth 60fps experience.
-   **Fully Responsive:** The full-screen animation adapts flawlessly to any device size.
-   **Zero Interaction:** A purely passive and mesmerizing visual showcase.

## Technology Stack

-   **Frontend:** React, TypeScript, Vite
-   **Styling:** Tailwind CSS
-   **Animation:** Framer Motion, HTML5 Canvas API
-   **Deployment:** Cloudflare Pages & Workers

## Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

-   [Bun](https://bun.sh/) installed on your machine.
-   [Git](https://git-scm.com/) for cloning the repository.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone <repository-url>
    cd retro_warpdrive_fx
    ```

2.  **Install dependencies:**
    ```sh
    bun install
    ```

## Development

To run the application in a local development environment with hot-reloading:

```sh
bun run dev
```

This will start the Vite development server, typically available at `http://localhost:3000`.

## Building for Production

To create a production-ready build of the application:

```sh
bun run build
```

This command bundles the application and outputs the static assets to the `dist` directory, ready for deployment.

## Deployment

This project is optimized for deployment on the Cloudflare network.

### Deploying with Wrangler

You can deploy the application directly to Cloudflare Pages using the Wrangler CLI.

1.  **Authenticate with Cloudflare:**
    ```sh
    bunx wrangler login
    ```

2.  **Run the deployment script:**
    ```sh
    bun run deploy
    ```

This will build and deploy your application.

### One-Click Deploy

Alternatively, you can deploy this project to your own Cloudflare account with a single click.

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)]([![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Jaythatskywalker/warpdrive-starfield-effect1))

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.