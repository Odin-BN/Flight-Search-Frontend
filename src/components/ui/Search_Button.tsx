import React, {useContext} from 'react';
import { Button, Flex } from 'antd';
import FlightSearchAmadeus from '@/context/FlightSearchAmadeus';

const Search_Button: React.FC = () => {
  const {handleSearch} = useContext(FlightSearchAmadeus);
  
  const Search = () => {
    handleSearch();
  };

  return (
    <Flex gap="small" wrap>
      <Button type="primary" onClick={Search}>Search</Button>
    </Flex>
  );
};

export default Search_Button;