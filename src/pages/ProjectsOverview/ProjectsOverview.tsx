import {useState} from "react";

import {projects} from "../../entities/projects/mockData.ts";
import {ProjectsSidebar} from "../../entities/projects/ProjectsSidebar/ProjectsSidebar.tsx";
import {TableWorkDetails} from "../../entities/projects/TableProject/TableWorkDetails.tsx";
import {ArrowBackIcon, GridIcon} from "../../shared/assets/icons/fill";
import {Button} from "../../shared/ui/Button/Button";

import style from './ProjectsOverview.module.scss'

export const ProjectsOverview = () => {
    const [projectId, setProjectId] = useState<number>(0)
    const selectedProject = projects.find(item=>item.id === projectId)


    return (
        <div className={style.container }>
            <header className={style.projects_header}>
                <Button className={style.btn_icon}><GridIcon/></Button>
                <Button className={style.btn_icon}><ArrowBackIcon/></Button>
                <Button>Просмотр</Button>
                <Button>Управление</Button>
            </header>
            <main className={style.main}>
                <ProjectsSidebar
                    className={style.side_bar}
                    projects={projects}
                    setProjectId={setProjectId}
                    selectedId={projectId}/>
                <TableWorkDetails
                    title={selectedProject?.fullName || 'Выберите проект'}
                    projectId={projectId}/>
            </main>
        </div>
    );
};
