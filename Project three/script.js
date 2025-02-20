const APIpost = "https://dummyjson.com/posts";

fetch(APIpost)
    .then(response => response.json())
            .then(data => {
                const postsContainer = document.getElementById('posts-container');
                for (let i = 0; i < data.posts.length; i++) {
                    const card = createCard(data.posts[i]);
                    postsContainer.appendChild(card);
                }
            })

function createCard(posts) {
    const card = document.createElement('div');
    card.className = 'card';

    const cTitle = document.createElement('h2');
    cTitle.className = 'cTitle';
    cTitle.textContent = posts.title;
    
    const cBody = document.createElement('p');
    cBody.className = 'cBody';
    cBody.textContent = posts.body;

    const cTag = document.createElement('p');
    cTag.className = 'cTag';
    cTag.textContent = posts.tags;

    const cReact = document.createElement('p');
    cReact.className = 'cReact';
    cReact.textContent = posts.reactions;

    card.appendChild(cTitle);
    card.appendChild(cBody);
    card.appendChild(cTag);
    card.appendChild(cReact);

    return card;

}

