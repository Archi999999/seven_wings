import cn from "classnames";

import {CaretIcon} from "../../../shared/assets/icons/outline";
import {ProjectListItem} from "../ProjectListItem/ProjectListItem.tsx";

import style from './ProjectsSidebar.module.scss'

interface IProjectsSidebar {
    className?: string
}

const projects = [
    "По проекту",
    "Объекты",
    "РД",
    "МТО",
    "СМР",
    "График",
    "МиМ",
    "Рабочие",
    "Капвложения",
    "Бюджет",
    "Финансирование",
    "Панорамы",
    "Камеры",
    "Поручения",
    "Контрагенты",
]

export const ProjectsSidebar = ({className}: IProjectsSidebar) => {
    return (
        <aside className={cn(style.sidebar, className)}>
            <div className={style.select}>
                <div className={style.label}>
                    <span className={style.title}>Название проекта</span>
                    <span className={style.abbr}>Аббревиатура</span>
                </div>
                <CaretIcon/>
            </div>
            <ul className={style.project_list}>
                {projects.map((item, i) => {
                    return <li key={i}><ProjectListItem label={item}/></li>
                })}
            </ul>
        </aside>
    );
};
