import cn from "classnames";

import {CaretIcon} from "../../../shared/assets/icons/outline";
import {IProject} from "../common/types.ts";
import {ProjectListItem} from "../ProjectListItem/ProjectListItem.tsx";

import style from './ProjectsSidebar.module.scss'

interface IProjectsSidebar {
    className?: string
    projects: IProject[]
    setProjectId: (projectId: number) => void
    selectedId: number
}

export const ProjectsSidebar = ({className, projects, setProjectId, selectedId}: IProjectsSidebar) => {
    return (
        <aside className={cn(style.sidebar, className)}>
            <div className={style.accordion}>
                <div className={style.label}>
                    <span className={style.title}>Название проекта</span>
                    <span className={style.abbr}>Аббревиатура</span>
                </div>
                <CaretIcon/>
            </div>
            <ul className={style.project_list}>
                {projects.map((item) => {
                    return <li key={item.id}>
                        <ProjectListItem
                            label={item.abbreviation}
                            onClick={()=>setProjectId(item.id)}
                            className={cn(selectedId === item.id && style.active)}/>
                    </li>
                })}
            </ul>
        </aside>
    );
};
