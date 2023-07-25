import React, {useEffect, useState} from "react";
import './style.scss';
import Button from "@mui/material/Button";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import {FeedForm} from "../../Components/FeedForm/feedForm";
import axios from "axios";
import {CircularProgress} from "@mui/material";
import {Feed} from "../../Components/Feed/feed";
import {FeedCard} from "../../Components/FeddCard/feedCard";

const isAdmin = true;

export const NewsPage = () => {

    const [news, setNews] = useState([]);
    const [createFeed, setCreateFeed] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [readFeed, setReadFeed] = useState(false);
    const [feed, setFeed] = useState({});
    const [selectedFeeds, setSelectedFeeds] = useState([]);
    const [edit, setEdit] = useState(false);

    useEffect( () => {
        getData()
    }, []);

    const selectFeed = async (id) => {
        if (!selectedFeeds.includes(id)) {
            setSelectedFeeds([...selectedFeeds, id]);
        } else {
            const result = selectedFeeds.filter(elem => elem !== id && elem);
            setSelectedFeeds(result);
        }
    }

    const openFeed = (id) => {
        setFeed(news.filter((e) => e.id === id && e)[0]);
        setReadFeed(true);
    }

    const correctFeed = (id) => {
        setFeed(news.filter((e) => e.id === id && e)[0]);
        setCreateFeed(true);
    }

    const getData = async () => {
        setIsLoading(true)
        const res = await axios.get('/api/news');
        const data = res.data.data;
        data && setNews(JSON.parse(data));
        setFeed({});
        setTimeout(() => setIsLoading(false), 1000);
    }

    const deleteFeeds = async () => {
        setIsLoading(true);
        const res = await axios.post(`/api/news/delete`, selectedFeeds);
        const data = res.data.data;
        data && setNews(data);
        setIsLoading(false);
    }

    const change = async () => {
        if (edit && selectedFeeds.length) {
            await deleteFeeds();
            setSelectedFeeds([]);
        }
        setEdit(!edit);
    }

    const Buttons = (
        <div className={'Buttons'}>
            {!!news.length && <Button
                className={'button'}
                variant="text"
                size={"large"}
                startIcon={edit ? <CheckIcon/> : <DeleteIcon/>}
                onClick={change}
            >
                {edit ? 'Подтвердить' : 'Удалить'}
            </Button>}
            <Button
                className={'button'}
                variant="text"
                size={"large"}
                disabled={edit}
                startIcon={<AddCircleIcon/>}
                onClick={() => setCreateFeed(true)}
            >
                {'Создать новость'}
            </Button>
        </div>
    );

    const defaultScreen = (
        <div className={'default'}>
            <div className={'image'}/>
            <span>{'Для вас новостей нет, все остается по-старому :)'}</span>
        </div>
    );

    return (
        <div className={'newsWrap'}>
            <div className={'headerNewsPage'}>
                <span className={'titlePage'}>{'Новости'}</span>
                {isAdmin && !isLoading && Buttons}
            </div>
            {readFeed &&
                <FeedCard feed={feed} setFeed={setFeed} setReadFeed={setReadFeed} open={readFeed}/>}
            {isLoading
                ? <div className={'load'}>
                    <CircularProgress thickness={1.5}/>
                </div>
                : <div className={'newsSection'}>
                    {!news.length
                        ? defaultScreen
                        : news.map((elem, index) =>
                            <Feed
                                key={index}
                                props={elem}
                                openFeed={openFeed}
                                correctFeed={correctFeed}
                                edit={edit}
                                isAdmin={isAdmin}
                                selectFeed={selectFeed}
                            />)
                    }
                    {createFeed && <FeedForm  setCreateFeed={setCreateFeed} updateData={getData} feed={feed}/>}
                </div>
            }
        </div>
    );
}
