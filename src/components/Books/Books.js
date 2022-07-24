import '../Books/books.css'

const Books = () => {
    return (


        <div class="books_container">
            <h1 class="title">Book1</h1>
            <h3>Click on pages to flip</h3>
            <div class="book">
                <input type="checkbox" name="page1" id="page1" />
                <input type="checkbox" name="page2" id="page2" />
                <input type="checkbox" name="page3" id="page3" />
                <input type="checkbox" name="page4" id="page4" />
                <div class="pages">
                    <div class="page1">
                        <label for="page1"></label>
                    </div>
                    <div class="page2">
                        <label for="page2"></label>
                    </div>
                    <div class="page3">
                        <label for="page3"></label>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Books;