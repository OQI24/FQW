import React from "react";
import './frontMenu.scss'
import {MenuItem} from "../../Components/MenuItem/menuItem";
import TaskIcon from '@mui/icons-material/Task';
import EmailIcon from '@mui/icons-material/Email';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ContactsIcon from '@mui/icons-material/Contacts';
import TopicIcon from '@mui/icons-material/Topic';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import {Link} from "react-router-dom";

export const SideMenu = () => {
    return(
        <div className={'menuWrap'}>xxx
            <Link to={'/'}>
                <div className={'logo'}/>
            </Link>
            <div className={'menuBody'}>
                <Link to={'/news'}>
                    <MenuItem title={'Новости'} icon={<NewspaperIcon/>}/>
                </Link>
                <Link to={'tasks'}>
                    <MenuItem title={'Список задач'} icon={<TaskIcon/>}/>
                </Link>
                <Link to={'/mail'}>
                    <MenuItem title={'Почта'} icon={<EmailIcon/>}/>
                </Link>
                <Link to={'/contacts'}>
                    <MenuItem title={'Контакты'} icon={<ContactsIcon/>}/>
                </Link>
                <Link to={'/docs'}>
                    <MenuItem title={'Документы'} icon={<TopicIcon/>}/>
                </Link>
                <Link to={'/lernbase'}>
                    <MenuItem title={'База знаний'} icon={<ModelTrainingIcon/>}/>
                </Link>
                <Link to={'/vacancy'}>
                    <MenuItem title={'Вакансии'} icon={<ContactPageIcon/>}/>
                </Link>
            </div>
        </div>
    );
};