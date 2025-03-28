import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Flex } from 'antd';
import FlightSearchAmadeus from '@/context/FlightSearchAmadeus';

const Search_Button: React.FC = () => {
  const {handleSearch} = useContext(FlightSearchAmadeus);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  
  const Search = () => {
    handleSearch();

    //agregar condicion que revise si se logro hacer la bsuqeuda, y si si que cambie de pagina.
    navigate("/flights");
  };

  return (
    <Flex gap="small" wrap>
      <Button type="primary" onClick={Search}>Search</Button>
    </Flex>
  );
};

export default Search_Button;