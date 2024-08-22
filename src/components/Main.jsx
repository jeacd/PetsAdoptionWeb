import itens from '../datasets/Carrosel';
import petsDataSet from '../datasets/Pets';
import servicosDataSet from '../datasets/Servicos';
import Carrosel from './Carrosel';
import ServicosCard from './ServicosCard';
import { useState } from 'react';
import PetsTable from './PetsTable';

const Main = () => {
  let [pets, setPets] = useState([...petsDataSet]);

  return (
    <main>
      <Carrosel itens={itens} />
      <ServicosCard servicos={servicosDataSet}></ServicosCard>
      <PetsTable pets={pets}></PetsTable>
    </main>
  );
};

export default Main;
