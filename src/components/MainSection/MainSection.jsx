
import { Container, Row } from 'react-bootstrap'
import history from '../dataSource/books/history.json'
import fantasy from '../dataSource/books/fantasy.json'
import horror from '../dataSource/books/horror.json'
import romance from '../dataSource/books/romance.json'
import scifi from '../dataSource/books/scifi.json'
import BookCard from '../BookCard/BookCard'

const MainSection = () => {
  
    const randomBookAll = [...fantasy, ...history, ...horror, ...scifi, ...romance]
    const randomBooks = randomBookAll.sort(() => Math.random() - 0.5).slice(0, 20)
    
    return (
        <Container>
            <Row className="gy-2">
                {randomBooks.map((book) => (
                    <BookCard
                    
                        title={book.title}
                        price={book.price}
                        category={book.category}
                        img={book.img}
                    />
                ))}
            </Row>
        </Container>
    )
}

export default MainSection