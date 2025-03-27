import React, {useContext, useEffect} from 'react';
import { Select, Space } from 'antd';
import FlightSearchAmadeus from '@/context/FlightSearchAmadeus';

const ArrivalAirport_Sel: React.FC = () => {
  const {destinationLocationCode, setDestinationLocationCode} = useContext(FlightSearchAmadeus);

  const handleChange = (value: string) => {
    setDestinationLocationCode(value);
  };

  useEffect(() => {
          console.log(destinationLocationCode);
        }, [destinationLocationCode]);

  return (
  <Space wrap>
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'BKK', label: 'BKK' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
  </Space>
);
};

export default ArrivalAirport_Sel;