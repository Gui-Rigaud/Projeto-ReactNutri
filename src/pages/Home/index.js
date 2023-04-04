//import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

function Home() {

    const [nutri, setNutri] = useState([]);

    useEffect(() => {

        function loadApi() {
            let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

            fetch(url)
                .then((r) => r.json())
                .then((json => {
                    console.log(json);
                    setNutri(json);
                }))
        }

        loadApi();
    }, []);

    return (
        <main>
            <center>
                <div className="posts">
                    {nutri.map((item, index) => {
                        return (

                            <Col>
                                <Card style={{ width: '50rem' }} className="post-nutri">
                                    <Card.Img variant="top" src={item.capa} />
                                    <Card.Body>
                                        <Card.Title>{item.titulo}</Card.Title>
                                        <Card.Text>
                                            {item.subtitulo}
                                            <br />
                                            <h2>Categoria: {item.categoria}</h2>
                                        </Card.Text>
                                        <Button variant="outline-primary">Mais informações</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                        )
                    })}
                </div>
            </center>
        </main>
    );
}

export default Home;