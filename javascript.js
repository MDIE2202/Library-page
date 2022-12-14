let library = []

function book(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages; 
    }

function addBookToLibrary (library){
    

    var Title = document.getElementById("Title").value;
    var Author = document.getElementById("Author").value;
    var Pages = document.getElementById("Pages").value;

    const new_entry = new book(Title,Author,Pages)

    library.push(new_entry);

    updatePage(library)
    
}

function removeFunction(library, id){
    
    for (let i = 0; i<library.length; i++){
        if(library[i].title == id)
           library.splice(i, 1)
    }

    updatePage(library)
}


function updatePage(library){
    let box = document.getElementById('library').innerHTML = '' //strip previous listings

    library.forEach((book) => { 
        let box = document.getElementById('library')
        let box2 = document.createElement('div')
        box2.className = 'row'
        box2.setAttribute('id', 'main_row_' + book.title)
        box.appendChild(box2)

        let row = document.getElementById('main_row_' + book.title)
        Object.keys(book).forEach(prop => {
            let td = document.createElement('div')
            td.textContent = prop +': ' + book[prop]
            td.className = prop
            td.setAttribute('id', book.title)
            row.appendChild(td)
        
           
    })
    let bu = document.createElement('button')
    bu.innerHTML = 'Remove entry'
    bu.setAttribute('id', book.title)
    bu.addEventListener('click', function(){removeFunction(library, book.title)})
    row.appendChild(bu) 

    let bu2 = document.createElement('button')
    bu2.innerHTML = 'Toggle Read'
    bu2.setAttribute('id', 'read_button')
    bu2.addEventListener('click', function(){reader_function(book.title)})
    row.appendChild(bu2) 

})
}

function reader_function(book){
    
    let read = document.getElementById('main_row_' + book)
    if (read.classList.contains('read')){
        read.setAttribute('class', 'row')
    }
    else{
        read.setAttribute('class', 'row read')
    }
    
}
