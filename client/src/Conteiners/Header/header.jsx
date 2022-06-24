import React, {useEffect, useState} from "react";
import './header.scss'
import moment from "moment";
import 'moment/locale/ru';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Badge from '@mui/material/Badge';

export const Header = () => {
    const [time, setTime] = useState(new Date());

    const getTime = () => {
        setTime(new Date());
        setTimeout(() => getTime(), 1000);
    }
    useEffect(() => {getTime()}, []);
    return(
        <div className={'headerWrap'}>
            <div className={'searchWrap'}>{'Поиск...'}</div>
            <div className={'timeWrap'}>
                {moment(time).locale('ru').format('dd DD.MM hh:mm')}
            </div>
            <div className={'notificationWrap'}>
                <Badge badgeContent={moment(time).format('s')} overlap="circular" color="secondary">
                    <CircleNotificationsIcon fontSize={"large"}/>
                </Badge>
            </div>
            <div className={'profileWrap'}></div>
        </div>
    );
};