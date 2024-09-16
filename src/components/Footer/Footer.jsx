import { Col, Container, Row } from 'react-bootstrap'
import { navLinks } from '../../components/dataSource/navData'
import { AccessibilityOutline } from 'react-ionicons'

const Footer = () => {
    return (
        <footer className="bg-dark text-white p-4">
            <Container>
                <Row>
                    <Col>
                        <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
                            <div>
                                <h2>Book Store</h2>
                            </div>

                            <div className="d-flex gap-3">
                                {navLinks.map((link) => (
                                    <a
                                        className="text-decoration-none text-white"
                                        href={link.href}
                                    >
                                        {link.text}
                                    </a>
                                ))}
                            </div>

                            <div className="d-flex gap-3 align-items-center justify-content-center">
                                <AccessibilityOutline
                                    color={'#00000'}
                                    title="A"
                                    height="40px"
                                    width="40px"
                                />

                                <AccessibilityOutline
                                    color={'#00000'}
                                    title="B"
                                    height="40px"
                                    width="40px"
                                />

                                <AccessibilityOutline
                                    color={'#00000'}
                                    title="C"
                                    height="40px"
                                    width="40px"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
