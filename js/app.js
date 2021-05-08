let offset = 0

function loadNews() {
    offset += 4
    const xhr = new XMLHttpRequest()

    xhr.open('GET', "php/load_news.php?offset="+offset, true)

    xhr.send()

    xhr.onreadystatechange = function () {
        if (this.readyState != 4) return

        document.querySelector('.news > .container > .load_news_btn').insertAdjacentHTML("beforebegin", this.responseText)
        if (!this.responseText)
            document.querySelector('.load_news_btn').setAttribute('class', 'dn')

        if (this.status != 200) {
                // обработать ошибку
                alert('ошибка: ' + (this.status ? this.statusText : 'запрос не удался'))
                return
        }
    }


}

