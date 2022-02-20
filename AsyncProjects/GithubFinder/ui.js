class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}"/>
                    <a href="${user.html_url}" target="_blank" class="mb-4 btn btn-primary btn-block">
                        View Profile
                    </a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">
                    Public Repos:
                        ${user.public_repos}
                    </span>
                    <span class="badge badge-secondary">
                        Public Gists: ${user.followers}
                    </span>
                    <span class="badge badge-info">
                        Following: ${user.following}
                    </span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">${user.location}</li>
                        <li class="list-group-item">${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>

        <h3 class="page-heading mb-3">LatestRepos</h3>
        <div id="repos"></div>
        `;
    }

    // Show user repositories
    showRepos(repos) {
        let output = '';

        repos.forEach(function (repo) {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">
                                ${repo.name}</a>
                            </a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks: ${repo.forms_count}</span>
                        </div>
                    </div>
                </div>
            `;

            // output repositories
            document.getElementById('repos').innerHTML = output;

        });
    }

    // -- Show Alert--//
    showAlert(message, className) {
        // clear alerts
        this.clearAlert();

        // create div
        const div = document.createElement('div');
        // add classes
        div.className = className;
        // add text
        div.appendChild(document.createTextNode(message));
        // get parent
        const container = document.querySelector('.searchContainer');
        // get search box
        const search = document.querySelector('.search');
        // insert alert
        container.insertBefore(div, search);

        // Timeout after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 3000);

    }

    // clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();

        }
    }

    // clear profile
    clearProfile() {
        this.profile.innerHTML = "";

    }

}