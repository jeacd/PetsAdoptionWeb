import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const PetsTable = ({ pets = [] }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Raça</th>
          <th>Idade</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {pets.map((pet, i) => {
          return (
            <tr key={pet.id}>
              <td>{pet.id}</td>
              <td>{pet.nome}</td>
              <td>{pet.raca}</td>
              <td>{pet.idade}</td>
              <td>{pet.preco}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

PetsTable.propTypes = {
  produtos: PropTypes.array,
};

export default PetsTable;
