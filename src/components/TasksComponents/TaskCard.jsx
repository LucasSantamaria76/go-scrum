import { useState } from 'react';
import { Button } from '../../components';
import { BtnClose, BtnData, CardContainer } from './tasksComponents';

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
        <h5>Tarea creada el {datetime}</h5>
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
            }>
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
