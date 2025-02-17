import React from 'react';
import { Form, Row, Col, Input, Checkbox } from 'antd';
import SessionStyles from './Session.css';

const cloudPerfectoUrl = 'cloud.Perfectomobile.com';

const portPlaceholder = (server) => server.perfecto.ssl ? '443' : '80';

const perfectoTokenPlaceholder = (t) => {
  if (process.env.PERFECTO_TOKEN) {
    return t('usingDataFoundIn', {environmentVariable: 'PERFECTO_TOKEN'});
  }
  return t('Add your token');
};

const ServerTabPerfecto = ({ server, setServerParam, t }) => (
  <Form>
    <Row gutter={8}>
      <Col span={9}>
        <Form.Item>
          <Input className={SessionStyles.customServerInputLeft} id='PerfectoServerHost' placeholder={cloudPerfectoUrl} addonBefore={t('Perfecto Host')}
            value={server.perfecto.hostname} onChange={(e) => setServerParam('hostname', e.target.value)} />
        </Form.Item>
      </Col>
      <Col span={4}>
        <Form.Item>
          <Input id='PerfectoPort' placeholder={portPlaceholder(server)} addonBefore={t('Perfecto Port')} value={server.perfecto.port}
            onChange={(e) => setServerParam('port', e.target.value)} />
        </Form.Item>
      </Col>
      <Col span={9}>
        <Form.Item>
          <Input id='token' placeholder={perfectoTokenPlaceholder(t)} addonBefore={t('Perfecto Token')} value={server.perfecto.token}
            onChange={(e) => setServerParam('token', e.target.value)} />
        </Form.Item>
      </Col>
      <Col span={2}>
        <Form.Item>
          <Checkbox checked={!!server.perfecto.ssl} onChange={(e) => setServerParam('ssl', e.target.checked)}> {'SSL'}</Checkbox>
        </Form.Item>
      </Col>
    </Row>
  </Form>
);

export default ServerTabPerfecto;
