import React, { useEffect, useCallback } from 'react';
import { Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters, setCurrentPage, addComment} from '../redux/actions/characters';
import Characters from '../components/Сharacters/Сharacters';
import Pagination from '../Common/Paginator';

const CharactersPage = () => {
  const characters = useSelector(({ characters }) => characters.characters);
  const comments = useSelector(({ characters }) => characters.comments);
  const currentPage = useSelector(({ characters }) => characters.currentPage);
  const isLoaded = useSelector(({ characters }) => characters.isLoaded);
  const totalCharactersCount = useSelector(({ characters }) => characters.totalCharactersCount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters(currentPage));
  }, [dispatch, currentPage]);

  const onChangeCurrentPage = useCallback(
    (curentPage) => {
      dispatch(setCurrentPage(curentPage));
    },
    [dispatch],
  );

  const onAddComment = useCallback(
    (newComment) => {
      dispatch(addComment(newComment));
    },
    [dispatch],
  );

  return (
    <Row justify="center">
      <Col style={{ marginTop: '2rem', textAlign: 'center' }}>
        <h1>Star wars</h1>
        <Pagination
          currentPage={currentPage}
          isLoaded={isLoaded}
          totalCharactersCount={totalCharactersCount}
          onChangeCurrentPage={onChangeCurrentPage}
        />
        <Characters characters={characters} isLoaded={isLoaded} onAddComment={onAddComment} comments={comments}/>
      </Col>
    </Row>
  );
};

export default CharactersPage;
