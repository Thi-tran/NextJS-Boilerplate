import fs from 'fs'
import path from 'path'

export function getPostList() {
    try {
        const postsDir = path.join(process.cwd(), 'pages/post');

        const result = fs
            .readdirSync(postsDir)
            .map(filename => (
                filename.substring(0, filename.indexOf('.'))
            ));

        return result;
    } catch (err) {
        console.warn('There are no posts!');
        return [];
    }
}