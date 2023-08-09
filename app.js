(async () => {
    const res = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-07-09&sortBy=publishedAt&apiKey=ac258abf3796495ca9d679cb402584fb")
    const data = await res.json()
    const articles = data.articles
    displayDataToHtml(articles)
})()


function displayDataToHtml(articles){
    
    addArticlesToSidebar(articles)
    // addArticlesToFirstArticleRow(articles.slice(0,3))
    // addArticlesToSecondArticleRow(articles.slice(3,6))
    showArticles(articles.slice(0,3), "first-articles-row")
    showArticles(articles.slice(3,6), "second-articles-row")
}




function addArticlesToSidebar(articles) {

    const sidebarArticleContainer = document.getElementById("sidebar-articles-container")
    let _articles = ""
    articles.forEach(article => {
        _articles += `<h4>${article.title}</h4>
                        <p class="date">${article.publishedAt}</p>
                        `
    });
    sidebarArticleContainer.innerHTML = _articles
}



// function addArticlesToFirstArticleRow(articles){


//     const firstArticleRow = document.getElementById("first-articles-row")
//     let _articles = ""
//     articles.forEach(article => {
//         _articles += `<div class="article">
//         <h5>${article.title}</h5>
//         <p>${article.description}</p>
//         </div> `
//     });

//     firstArticleRow.innerHTML = _articles


// }


// function addArticlesToSecondArticleRow(articles){

//     const secondArticleRow = document.getElementById("second-articles-row")
//     let _articles = ""
//     articles.forEach(article => {
//         _articles += `<div class="article">
//         <h5>${article.title}</h5>
//         <p>${article.description}</p>
//         </div> `
//     });

//     secondArticleRow.innerHTML = _articles
// }


function showArticles(articles, id) {

    const container = document.getElementById(id)
    let _articles = ""
    articles.forEach(article => {
        _articles += `<div class="article">
        <h3 class="article-heading">${article.title}</h3>
        <p class="article-description">${article.description}</p>
        </div> `
    });

    container.innerHTML = _articles
}

