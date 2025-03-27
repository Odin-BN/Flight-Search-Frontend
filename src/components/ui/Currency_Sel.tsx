import React, {useContext, useEffect} from 'react';
import { Select, Space } from 'antd';
import FlightSearchAmadeus from '@/context/FlightSearchAmadeus';

const Currency_Sel: React.FC = () => {
  const { currencyCode, setCurrencyCode } = useContext(FlightSearchAmadeus);
  
  const handleChange = (value: string) => {
    setCurrencyCode(value)
  };
  
  useEffect(() => {
            console.log(currencyCode);
          }, [currencyCode]);

  return (
  <Space wrap>
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'EUR', label: 'EUR' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
  </Space>
);
};

export default Currency_Sel;