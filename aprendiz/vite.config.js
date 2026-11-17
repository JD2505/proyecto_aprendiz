import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/css/estilos.css',
                'resources/css/estilosPlantilla.css',
                'resources/css/estilos_iniciar_sesion.css',
            ],
            refresh: true,
        }),
    ],
});