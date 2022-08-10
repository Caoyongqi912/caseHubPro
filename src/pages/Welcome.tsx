import {PageContainer} from '@ant-design/pro-components';
import React from 'react';
import {useModel} from "@@/plugin-model/useModel";
import {Card, Col, Row} from 'antd';


const Welcome: React.FC = () => {
  // const {initialState} = useModel('@@initialState');
  return (
    <PageContainer>
      {/* <h1>hi {currentUser.username} </h1> */}
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    </PageContainer>
  );
};

export default Welcome;
