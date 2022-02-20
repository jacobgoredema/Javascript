class Github {
    constructor() {
        this.clientId = '1bf5cec0a963dbf4';
        this.clientSecret = '77ecdc9624b8399f9e9518f4f92416417088ebeb';
        this.reposCount = 5;
        this.reposSort = 'created:asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?clientId=${this.clientId}&clientSecret=${this.clientSecret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort={this.reposSort}&clientId=${this.clientId}&clientSecret=${this.clientSecret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }

    }
}