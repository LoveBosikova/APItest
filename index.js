'use strict'

const articlesWrap = document.getElementsByTagName('main')[0];

// Создаём статью на странице
function createArticle (header, text) {
    const artWrap = document.createElement('article');
    const artHeader = document.createElement('h2');
    artHeader.innerText = header;
    const articleBody = document.createElement('p');
    articleBody.innerText = text;

    artWrap.append(artHeader);
    artWrap.append(articleBody);

    return artWrap;
}

function printArticle(article) {
    articlesWrap.appendChild(article);
}


// Достаём статьи из АПИ
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
    json.forEach(article => {
        console.log(article);
        printArticle(createArticle(article.title, article.body));
    });
  });