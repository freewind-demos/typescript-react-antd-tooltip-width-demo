import React from 'react'
import { Alert, Button, Tooltip } from 'antd';

const tooltip = 'kds sd wef sdf sfkljsdl woijof sfio sfoiwe fhoh sdf sdf sdf sf ewf sf sdfwe fwe f wefwef wef wef';

export default function Hello() {
  return <Tooltip title={tooltip}
    overlayInnerStyle={{ width: 800 }}
  >
    <Button>Hello</Button>
  </Tooltip>
};
