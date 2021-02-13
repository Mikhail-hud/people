import React from 'react';
import { Pagination, Row, Col } from 'antd';

let Paginator = (props) => {
  
  const { totalCharactersCount, currentPage, isLoaded, onChangeCurrentPage } = props;

  const handleChangeCurrentPage = (currentPage) => {
    onChangeCurrentPage(currentPage);
  };

  return (
    <Row justify="center">
      <Col>
        <Pagination
          responsive
          showQuickJumper
          showSizeChanger={false}
          disabled={!isLoaded}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
          current={currentPage}
          total={totalCharactersCount}
          onChange={handleChangeCurrentPage}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} Characters`}
        />
      </Col>
    </Row>
  );
};

export default Paginator;
