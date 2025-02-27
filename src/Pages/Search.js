

const metaData = [
    {data: 'docker images', Index: 1, ID: 'docker-images'},
    {data: 'docker Container', Index: 1, ID: 'docker-containers'},
    {data: 'docker Volume', Index: 1, ID: 'docker-port-env-volume'},
    {data: 'docker Port Mapping', Index: 1, ID: 'docker-port-env-volume'},
    {data: 'docker env, Environment', Index: 1, ID: 'docker-port-env-volume'},
    {data: 'docker Networking', Index: 1, ID: 'docker-networking'},
    {data: 'docker Compose', Index: 1, ID: 'docker-compose'},
    {data: 'Multiple docker Containers', Index: 1, ID: 'docker-multi-containers'},
    
    {data: 'Git & GitHub', Index: 2, ID: 'git-basics'},
    {data: 'Git Basics', Index: 2, ID: 'git-basics'},
    {data: 'Git Branch', Index: 2, ID: 'git-branching-merging'},
    {data: 'Git Merge', Index: 2, ID: 'git-branching-merging'},
    {data: 'Git Switch', Index: 2, ID: 'git-branching-merging'},
    {data: 'Git Delete Branch', Index: 2, ID: 'git-branching-merging'},
    {data: 'Git Stash clear', Index: 2, ID: 'git-stash'},
    {data: 'Git Temporary Changes/Stash pop list drop apply', Index: 2, ID: 'git-stash'},
    {data: 'Git Rebase', Index: 2, ID: 'git-rebase-reset'},
    {data: 'Git Reset', Index: 2, ID: 'git-rebase-reset'},
    {data: 'Git Revert Reflog', Index: 2, ID: 'git-rebase-reset'},
    {data: 'Git Repository Setup', Index: 2, ID: 'github-setup'},
    {data: 'Git Best Practice', Index: 2, ID: 'git-best-practices'},

    {data: 'Kubernates', Index: 3, ID: 'kubernetes-intro'},
    {data: 'Kubernates Intro', Index: 3, ID: 'kubernetes-intro'},
    {data: 'Kubernates Architecture', Index: 3, ID: 'kubernetes-architecture'},
    {data: 'Kubernates Objects', Index: 3, ID: 'kubernetes-objects'},
    {data: 'Kubernates Minikube', Index: 3, ID: 'kubernetes-minikube'},
    {data: 'Kubernates Kubectl Commands', Index: 3, ID: 'kubernetes-kubectl-commands'},
    {data: 'Kubernates Scaling', Index: 3, ID: 'kubernetes-scaling-updates'},
    {data: 'Kubernates Rolling Updates', Index: 3, ID: 'kubernetes-scaling-updates'},
    {data: 'Kubernates Yaml Deployment', Index: 3, ID: 'kubernetes-yaml-deployment'},

    {data: 'Redis', Index: 4, ID: 'redis-intro'},
    {data: 'Redis Intro', Index: 4, ID: 'redis-intro'},
    {data: 'Redis Installation', Index: 4, ID: 'redis-installation'},
    {data: 'Redis Basic Commands', Index: 4, ID: 'redis-basic-commands'},
    {data: 'Redis Connecting', Index: 4, ID: 'redis-connection'},
    {data: 'Redis Advanced', Index: 4, ID: 'redis-advanced'},
    {data: 'Redis Best Practices', Index: 4, ID: 'redis-best-practices'},
    {data: 'Redis Additional', Index: 4, ID: 'redis-resources'},

    {data: 'PostgreSQL', Index: 5, ID: 'postgres-intro'},
    {data: 'PostgreSQL Intro', Index: 5, ID: 'postgres-intro'},
    {data: 'PostgreSQL Installation', Index: 5, ID: 'postgres-setup'},
    {data: 'PostgreSQL Accessing', Index: 5, ID: 'postgres-access'},
    {data: 'PostgreSQL Important Commands', Index: 5, ID: 'postgres-commands'},
    {data: 'PostgreSQL Containers', Index: 5, ID: 'postgres-stop_remove'},
    {data: 'PostgreSQL Scaling', Index: 5, ID: 'postgres-stop_remove'},
    {data: 'PostgreSQL Rolling Updates', Index: 5, ID: 'postgres-stop_remove'},
    {data: 'PostgreSQL Yaml Deployment', Index: 5, ID: 'postgres-stop_remove'},

    {data: 'Django', Index: 6, ID: 'django-setup'},
    {data: 'Django Setup', Index: 6, ID: 'django-setup'},
    {data: 'Django Models', Index: 6, ID: 'django-models'},
    {data: 'Django Urls', Index: 6, ID: 'django-urls'},
    {data: 'Django Documentation', Index: 6, ID: 'django-docs'},
    {data: 'Django Installation', Index: 6, ID: 'django-install-venv'},
    {data: 'Django Virtual Environment |uv |venv', Index: 6, ID: 'django-install-venv'},
    {data: 'Django Creating Project', Index: 6, ID: 'django-create-project'},
    {data: 'Django Static Templates', Index: 6, ID: 'django-static-templates'},
    {data: 'Django App', Index: 6, ID: 'django-create-app'},
    {data: 'Django Tailwind', Index: 6, ID: 'tailwind-django'},
    {data: 'Django SuperUser', Index: 6, ID: 'django-superuser-admin'},
    {data: 'Django Models Urls', Index: 6, ID: 'django-models-urls'},
    {data: 'Django App Registration', Index: 6, ID: 'django-create-app'},
    {data: 'Django Tailwind Integration', Index: 6, ID: 'tailwind-django'},
    {data: 'Django SuperUser Creation', Index: 6, ID: 'django-superuser-admin'},
    {data: 'Django Admin Panel', Index: 6, ID: 'django-superuser-admin'},

    

]

export default async function Search(query) {
    const filtered = metaData.filter((doc) => {
        const data = String(doc.data).toLowerCase();
        return data.includes(query.toLowerCase());
    });
    
    // console.log(filtered);
    return filtered;
}
