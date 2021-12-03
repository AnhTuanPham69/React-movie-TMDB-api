const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '096eb8927eafa31acd02c3df4e489537',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;