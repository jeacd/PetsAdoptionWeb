import { Button, Card, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ServicosCard = ({ servicos = [] }) => {
  return (
    <Row className="p-2">
      {servicos.map((servico, i) => {
        return (
          <Col key={i} sm={12} md={6} lg={4}>
            <Card style={{ width: '18rem', marginTop: '10px' }}>
              <Card.Img variant="top" src={servico.imagemUrl} />
              <Card.Body>
                <Card.Title>{servico.titulo}</Card.Title>
                <Card.Text>{servico.descricao}</Card.Text>
                <Card.Text><b>R${servico.valor}</b></Card.Text>
                <Button variant="secondary">Contratar</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

ServicosCard.propTypes = {
  servicos: PropTypes.array,
};

export default ServicosCard;
