// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';

// export default defineConfig({
//     plugins: [
//         laravel({
//             input:  'resources/js/app.jsx',
//             refresh: true,
//         }),
//         react(),
//     ],
// });

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'; // <-- Import the react plugin

export default defineConfig({
    plugins: [
        laravel({
            input:  'resources/js/app.jsx',
            refresh: true,
        }),
        react(), // <-- Add the react plugin here
    ],
    resolve: {
        alias: {
            "@" : "/resources/js",
        },
    }
});
