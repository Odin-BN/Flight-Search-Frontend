import React, { useContext } from 'react';
import { Button, Flex } from 'antd';
import FlightsSort from '@/context/FlightsSort';
import FlightList from '@/context/FlightList';

const SortingButtons: React.FC = () => {
  const {flightsSort} = useContext(FlightsSort);
  const {fetchFlights} = useContext(FlightList);

  const sortPrice = () => {
    flightsSort("price");
    fetchFlights();

  };

  const sortDuration = () => {
    flightsSort("duration");
    fetchFlights();
  }

  return (
  <Flex gap="small" wrap>
    <Button type="primary">Search</Button>
    <Button onClick={sortPrice}>Price</Button>
    <Button type="dashed" onClick={sortDuration}>Duration </Button>
  </Flex>
  );
};

export default SortingButtons;