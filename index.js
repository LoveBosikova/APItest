'use strict'

const articlesWrap = document.getElementsByTagName('main')[0];

// Создаём статью на странице
function createArticle (header, text) {
    const artWrap = document.createElement('article');
    const artHeader = document.createElement('h2');
    artHeader.innerText = header;
    const articleBody = document.createElement('p');
    articleBody.immerText = text;

    artWrap.append(artHeader);
    artWrap.append(articleBody);

    return artWrap;
}