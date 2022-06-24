import React, {useEffect, useState} from "react";
import './style.scss';
import Button from "@mui/material/Button";
import moment from "moment";
import {IconButton} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const Feed = ({props: {title, text, priority, img, date, id}, openFeed, selectFeed, edit, isAdmin, correctFeed}) => {

    title = title?.length > 30 ? `${title.substring(0, 30)}..` : title;
    text = text?.length > 30 ? `${text.substring(0, 40)}...` : text;

    const [preparingForDelete, setPreparingForDelete] = useState(false);

    const click = () => {
        if (edit) {
            selectFeed(id);
            setPreparingForDelete(!preparingForDelete);
        } else {
            openFeed(id)
        }
    }

    return (
        <div className={'feedWrap'}>
            <div className={'img'} onClick={click}/>
            <div className={'topicTag'}>{priority}</div>
            <div className={'title'} onClick={click}>{title}</div>
            <span className={'text'}>{text}</span>
            <div className={'date'}>{moment(date).format('DD.MM.YYYY')}</div>
            <Button disabled={edit} variant="outlined" className={'read'} onClick={() => openFeed(id)}>{'Подробнее'}</Button>
            <IconButton
                disabled={edit}
                className={'editButton'}
                aria-label={edit ? 'Удалить' : 'Редактировать'}
                onClick={() => isAdmin && !edit && correctFeed(id)}
            >
                {edit ? <DeleteIcon color={'error'}/> : isAdmin ? <EditIcon/> : null}
            </IconButton>
            {preparingForDelete && <div className={'deleted'} onClick={click}/>}
        </div>
    )
}
