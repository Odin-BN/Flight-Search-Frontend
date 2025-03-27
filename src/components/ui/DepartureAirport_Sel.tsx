import React, {useContext, useEffect} from 'react';
import { Select, Space } from 'antd';
import FlightSearchAmadeus from '@/context/FlightSearchAmadeus';



const DepartureAirport_Sel: React.FC = () => {
  const { originLocationCode, setOriginLocationCode } = useContext(FlightSearchAmadeus);

  const handleChange = (value: string) => {
    setOriginLocationCode(value);

  };

  useEffect(() => {
    console.log(originLocationCode);
  }, [originLocationCode]);

  return (
  <Space wrap>
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'SYD', label: 'SYD' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
  </Space>
  )
};

export default DepartureAirport_Sel;