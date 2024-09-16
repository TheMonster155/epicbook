import fantasy from '../dataSource/books/fantasy.json'
import history from '../dataSource/books/history.json'
import horror from '../dataSource/books/horror.json'
import romance from '../dataSource/books/romance.json'
import scifi from '../dataSource/books/scifi.json'
import './WelcomeSection.css'
const WelcomeSection = ({warinng}) => {
    const books = [...fantasy, ...history, ...horror, ...romance, ...scifi]
    const randomIndex = Math.floor(Math.random() * books.length)
    const randomBook = books[randomIndex]
    console.log(randomBook)

    return (
        <div className="bg-light text-center py-5">
            <div className="container pt-5 pb-5">
                <div className="row pt-5 pb-5">
                    <div className="col-lg-12 col-xl-12 ms-auto pb-5 pt-5">
                        <span>{randomBook.category}</span>
                        <h1 className="display-3 fw-bold mb-3">
                            Libro Del Giorno
                        </h1>

                        <div  >
                            <img src={randomBook.img} alt="" id='imageDay' />
                        </div>

                        <p className="lead mb-3">{randomBook.title}</p>

                        <button className="btn btn-info text-white" onClick={warinng} >
                            Acquista a: {randomBook.price} £                          
                      </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeSection
