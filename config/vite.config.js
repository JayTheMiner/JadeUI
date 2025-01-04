import { defineConfig } from 'vite';
import litcss from 'vite-plugin-lit-css';

export default defineConfig({
    root: 'src', // 소스 디렉토리 설정
    build: {
        outDir: '../dist', // 빌드 결과물 디렉토리 설정
    },
    plugins: [litcss()],
});
