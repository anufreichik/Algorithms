//Single Responsibility Principle
//class should be responsible for one thing

class News {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.modified = false;
    }

    update(text) {
        this.text = text;
        this.modified = true;
    }
    //
    // toHTML() {
    //     return `<div class="news">
    //                 <h1>${this.title}</h1>
    //                 <h1>${this.text}</h1>
    //             </div>`
    // }
    //
    // toJSON(){
    //     return JSON.stringify({
    //         title:this.title,
    //         text:this.text,
    //         modified: this.modified
    //     })
    // }
}

const news = new News('Rus', 'new politics')

//better to create separate class
class NewsPrinter{
    constructor(news) {
        this.news=news
    }

    html(){
        return
            return `<div class="news">
                        <h1>${this.news.title}</h1>
                        <h1>${this.news.text}</h1>
                    </div>`
    }

    json(){
            return JSON.stringify({
                title:this.news.title,
                text:this.news.text,
                modified: this.news.modified
            })

    }
}

const printer = new NewsPrinter(
    new News('News Title', 'News Text...')
)

console.log(printer.html())
console.log(printer.json())

// console.log(news.toHTML());
// console.log(news.toJSON());

