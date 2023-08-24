import React from 'react';
import { Form, Input, Row, Col } from 'antd';
import { INPUT } from '../AntdTypes';

const browserstackUsernamePlaceholder = (t) => {
  if (process.env.BROWSERSTACK_USERNAME) {
    return t('usingDataFoundIn', {environmentVariable: 'BROWSERSTACK_USERNAME'});
  }
  return t('yourUsername');
};

const browserstackAccessKeyPlaceholder = (t) => {
  if (process.env.BROWSERSTACK_ACCESS_KEY) {
    return t('usingDataFoundIn', {environmentVariable: 'BROWSERSTACK_ACCESS_KEY'});
  }
  return t('yourAccessKey');
};
const browserstackParams = new URL(window.location).searchParams;
const username = browserstackParams.get('username');
const accessKey = browserstackParams.get('accessKey');

const ServerTabBrowserstack = ({ setServerParam, t }) => (
  <Form>
    <Row gutter={8}>
      <Col span={12}>
        <Form.Item>
          <Input id='browserstackUsername' placeholder={browserstackUsernamePlaceholder(t)} addonBefore={t('BrowserStack Username')} value={username}
            onChange={(e) => setServerParam('username', e.target.value)} />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item>
          <Input id='browserstackPassword' type={INPUT.PASSWORD} placeholder={browserstackAccessKeyPlaceholder(t)} addonBefore={t('BrowserStack Access Key')}
            value={accessKey} onChange={(e) => setServerParam('accessKey', e.target.value)} />
        </Form.Item>
      </Col>
    </Row>
  </Form>
);

export default ServerTabBrowserstack;
