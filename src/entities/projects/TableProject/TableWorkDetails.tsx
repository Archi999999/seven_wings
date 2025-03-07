import {useEffect} from "react";

import cn from "classnames";
import {useSelector} from "react-redux";

import {RootState} from "../../../app/store/store.ts";
import {useLazyGetWorkDetailsByIdQuery} from "../../../services/projects/projects.service.ts";
import {IWorkDetail} from "../../../services/projects/types.ts";
import {useFetchCreateWorkDetail} from "../../../services/projects/utils/useFetchCreateWorkDetail.ts";
import {Table} from "../../../shared/ui/Table/Table.tsx";

import {FormWorkDetailRow} from "./FormWorkDetailRow/FormWorkDetailRow.tsx";
import {WorkDetailRow} from "./WorkDetailRow/WorkDetailRow.tsx";

import style from './TableWorkDetails.module.scss'

interface ITableProject {
    title: string;
    className?: string
    projectId: number
}

export const TableWorkDetails = ({className, title, projectId}: ITableProject) => {

    const [getWorkDetails] = useLazyGetWorkDetailsByIdQuery();
    const { fetchCreateWorkDetail } = useFetchCreateWorkDetail()

    const workDetails = useSelector((state:RootState):IWorkDetail[] => state.projectSlice)

    const handleSubmit = (data: IWorkDetail) => {
        fetchCreateWorkDetail({data, projectId})
    }

    useEffect(() => {
        if (projectId) {
            getWorkDetails(projectId)
        }
    }, [projectId]);

    return (
        <div className={cn(style.container_table, className)}>
            <div className={style.title_table}>
                <h1 className={style.title}>{title}</h1>
            </div>
                <Table.Root className={style.table}>
                    <Table.Head>
                        <Table.Row>
                            <Table.TitleCell>Уровень</Table.TitleCell>
                            <Table.TitleCell>Наименование работ</Table.TitleCell>
                            <Table.TitleCell>Основная з/п</Table.TitleCell>
                            <Table.TitleCell>Оборудование</Table.TitleCell>
                            <Table.TitleCell>Накладные расходы</Table.TitleCell>
                            <Table.TitleCell>Сметная прибыль</Table.TitleCell>
                        </Table.Row>
                    </Table.Head>
                    <Table.Body>
                        { workDetails.length > 0 ?
                            (workDetails.map((workDetail, i) => (
                            <WorkDetailRow key={workDetail.id} workDetail={workDetail} padding={12} projectId={projectId} isFirstElement={i===0}/>
                        ))
                            ): (
                                projectId ? <FormWorkDetailRow key={projectId} onSubmit={handleSubmit} /> : null
                            )
                        }
                    </Table.Body>
                </Table.Root>
        </div>
    );
};
