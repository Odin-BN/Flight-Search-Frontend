import React, { useState, useContext } from 'react';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import FlightList from '@/context/FlightList';

const Pagination_List: React.FC = () => {
    const {setPage_Sel} = useContext(FlightList);
    const {fetchFlights} = useContext(FlightList);
    const [current, setCurrent] = useState(1);

  const onChange: PaginationProps['onChange'] = (page) => {
    console.log(page);
    setCurrent(page);
    setPage_Sel(String(page));

    setTimeout(() => {
        fetchFlights();
        console.log("Termino el tiempo antes de solicitar otra pagina de datos");
      }, 5000);
  };

  return <Pagination current={current} onChange={onChange} total={50} showSizeChanger={false} align={'center'}/>;
};

export default Pagination_List;