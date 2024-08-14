export const getGithubStats = async (username: string) => {
    return `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent`;
}
