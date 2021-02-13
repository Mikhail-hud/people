import React from 'react';
import { List, Button, Row, Col, Skeleton, Typography, Input } from 'antd';
import { CommentOutlined } from '@ant-design/icons';
import { useForm } from 'react-hook-form';
const { Text } = Typography;
const { TextArea } = Input;

const Character = (props) => {
  const { characters, isLoaded, onAddComment, comments } = props;

  const AddCommentForm = (characterName) => {
    const { register, handleSubmit, errors, reset } = useForm();
    let name = characterName.characterName;
    const onSubmit = ({ newComment }) => {
      onAddComment({ newComment, name: name });
      reset();
    };
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.newComment?.type === 'maxLength' && (
          <Text type="danger">Limit is 50 characters</Text>
        )}
        <textarea
          placeholder="Type to comment.."
          name="newComment"
          rows={1}
          ref={register({ required: true, maxLength: 50 })}
        />
        <Button
          icon={<CommentOutlined />}
          htmlType="submit"
          type="primary"
          size="small"
          shape="round">
          Comment
        </Button>
      </form>
    );
  };

  const renderComment = (name) => {
    if (comments.length > 0) {
      return comments.map((item, index) => {
        if (name === item.name) {
          return <p key={`${index}_${item.name}`}>{item.newComment}</p>;
        }
      });
    }
  };

  return (
    <Row justify="center">
      <Col xs={24} sm={24} md={18} lg={14} xl={12} xxl={10}>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={characters}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={isLoaded && [<AddCommentForm characterName={item.name} />]}>
              <Skeleton loading={!isLoaded} active>
                <List.Item.Meta title={item.name} description={item.birth_year} />
                {renderComment(item.name)}
              </Skeleton>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};
export default Character;
