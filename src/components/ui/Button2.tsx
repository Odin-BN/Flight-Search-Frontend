import React from 'react';
import { Button, Flex } from 'antd';

const Button2: React.FC = () => (
  <Flex gap="small" wrap>
    <Button type="primary">Search</Button>
    <Button>Price</Button>
    <Button type="dashed">Duration</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Flex>
);

export default Button2;