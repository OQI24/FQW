import React, {useState} from "react";
import './style.scss';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import {IconButton, TextField} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";

const params = {
    titleLength: 30,
    priority: {
        low: 'low',
        normal: 'normal',
        high: 'high',
    },
    text: 'This article walks you through a list of the most popular open-source WYSIWYG (What You See Is What You Get or Rich Text) editors for React. Their order is based on the number of stars they receive on Github and the number of downloads per week on npmjs.com.',
    title: '5 best open-source WYSIWYG editors for React (2022)'
}


export const FeedForm = ({updateData, setCreateFeed, feed}) => {
    const {title, text, priority, id, img} = feed;
    const [state, setState] = useState({
        title: title || params.title,
        text: text || params.text,
        priority: priority || params.priority.normal,
        img: img || '',
        id: id || null
    });

    const save = async () => {
        const headers = {'Content-Type': 'application/json'}
        const url = `/api/news/${id ? 'change' : 'create'}`
        await axios.post(url, JSON.stringify({...state, date: new Date()}), {headers});
        updateData();
        close();
    }

    const close = () => {
        setCreateFeed(false);
    }

    return (
        <div className={'backgroundForm'}>
            <div className={'formContainer'}>
                <IconButton aria-label="Закрыть" size='large' className={'close'} onClick={close}>
                    <CloseIcon fontSize="large"/>
                </IconButton>
                <TextField
                    className={'feedTitle'}
                    label={'Заголовок'}
                    maxRows={'1'}
                    variant={'standard'}
                    autoFocus={true}
                    multiline={true}
                    defaultValue={state.title}
                    onChange={(event) => setState({...state, title: event.target.value})}
                />
                <TextField
                    className={'feedText'}
                    label={'Описание'}
                    variant={'filled'}
                    multiline={true}
                    defaultValue={state.text}
                    onChange={(event) => setState({...state, text: event.target.value})}
                />
                <div className="priority">
                    <span>{'Приоритет'}</span>
                    <ToggleButtonGroup
                        color="primary"
                        value={state.priority}
                        exclusive
                        size={'small'}
                        onChange={(e) => setState({...state, priority: e.target.value})}
                    >
                        <ToggleButton value={params.priority.low}>Низкий</ToggleButton>
                        <ToggleButton value={params.priority.normal}>Нормальный</ToggleButton>
                        <ToggleButton value={params.priority.high}>Высокий</ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <div className={'selectImage'}>
                    <span>{'Выбрать обложку'}</span>
                    <input type="file" className={'selectImage'} title={'Выбрать обложку'}/>
                </div>
                <Button variant="outlined" className={'saveButton'} disabled={false} onClick={save}>{id ? 'Сохранить' : 'Опубликовать'}</Button>
            </div>
        </div>
    );
};