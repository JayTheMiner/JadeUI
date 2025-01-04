import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src', // 소스 디렉토리 설정
    build: {
        outDir: '../dist', // 빌드 결과물 디렉토리 설정
    },
});
