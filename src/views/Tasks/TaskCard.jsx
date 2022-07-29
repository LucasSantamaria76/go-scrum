import { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '../../components';

export const TaskCard = ({
  deleteCard,
  editCardStatus,
  data: {
    _id,
    title,
    createdAt,
    user: { userName },
    description,
    status,
    importance,
  },
  data,
}) => {
  const [showMore, setShowMore] = useState(false);
  const datetime = new Date(createdAt).toLocaleString() + ' hs.';

  const limitString = (str) => {
    if (str.length > 120) return { string: str.slice(0, 117).concat('...'), addButton: true };
    return { string: str, addButton: false };
  };
  return (
    <>
      <CardContainer>
        <BtnClose onClick={() => deleteCard(_id)}>x</BtnClose>
        <h3>{title}</h3>
        <h6>{datetime}</h6>
        <h5>{userName}</h5>
        <div>
          <BtnData
            type='button'
            bgColor={
              status.toLowerCase() === 'new'
                ? '#ff442b'
                : status.toLowerCase() === 'in progress'
                ? '#ff7300'
                : '#00b300'
            }
            onClick={() => editCardStatus(data)}>
            {status.toLowerCase()}
          </BtnData>
          <BtnData
            type='button'
            bgColor={
              importance.toLowerCase() === 'low'
                ? '#1772c7'
                : importance.toLowerCase() === 'medium'
                ? '#ff9900cc'
                : '#ff0000'
            }
            onClick={() => editCardStatus(data)}>
            {importance.toLowerCase()}
          </BtnData>
        </div>
        {!showMore && <p>{limitString(description).string}</p>}
        {showMore && (
          <>
            <p>{description}</p>
            <Button type='button' onClick={() => setShowMore(false)} width='60px' height='18px'>
              Ver menos
            </Button>
          </>
        )}
        {!showMore && limitString(description).addButton && (
          <Button type='button' onClick={() => setShowMore(true)} width='50px' height='18px'>
            Ver más
          </Button>
        )}
      </CardContainer>
    </>
  );
};

const CardContainer = styled.div`
  width: 100%;
  min-width: 150px;
  border: 1px solid #ccc;
  border-radius: 12px;
  margin-bottom: 0.8rem;
  padding: 0.8rem 1.1rem 0.9rem;
  position: relative;
  transition: all 0.2s ease-out;

  h3 {
    font-size: 1rem;
    font-weight: 700;
    margin: 0 0 0.2rem;
  }
  h5,
  h6 {
    color: #424242;
    font-size: 0.6rem;
    margin: 0 0 0.1rem;
  }
  p {
    color: #424242;
    display: block;
    font-size: 0.8rem;
    margin: 0 0 0.2rem;
  }
`;

const BtnClose = styled.div`
  cursor: pointer;
  position: absolute;
  right: 12px;
  top: 10px;
  font-size: 18px;
  transition: background-color 0.2s ease-out;
  &:hover {
    color: #000;
  }
`;

const BtnData = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  border: 1px solid ${({ bgColor }) => bgColor};
  opacity: 0.7;
  border-radius: 4px;
  color: #fff;
  padding: 0.075rem 0.3rem;
  margin: 3px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background-color 0.2s ease-out;
  &:hover {
    opacity: 0.6;
  }
  &:active {
    opacity: 1;
  }
`;
