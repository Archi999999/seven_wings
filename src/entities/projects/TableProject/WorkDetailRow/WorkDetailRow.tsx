import { useState } from "react";

import {
    useDeleteWorkDetailMutation,
    useUpdateWorkDetailMutation
} from "../../../../services/projects/projects.service.ts";
import {IWorkDetail} from "../../../../services/projects/types.ts";
import {useFetchCreateWorkDetail} from "../../../../services/projects/utils/useFetchCreateWorkDetail.ts";
import {Table} from "../../../../shared/ui/Table/Table.tsx";
import {ActionButtonCell} from "../ActionButtonCell/ActionButtonCell.tsx";
import {FormWorkDetailRow} from "../FormWorkDetailRow/FormWorkDetailRow.tsx";

interface IWorkDetailRow {
    className?: string
    workDetail: IWorkDetail
    padding: number
    projectId: number
    isFirstElement?: boolean
}

export const WorkDetailRow = ({className, workDetail, padding, projectId, isFirstElement}: IWorkDetailRow) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isCreate, setIsCreate] = useState(false);

    const [fetchUpdateWorkDetail] = useUpdateWorkDetailMutation()
    const [fetchDeleteWorkDetail] = useDeleteWorkDetailMutation()
    const { fetchCreateWorkDetail } = useFetchCreateWorkDetail()

    const handleSubmit = (workDetail: IWorkDetail) => {
        fetchUpdateWorkDetail({workDetail, projectId})
        setIsEditing(false)
    }

    const handleCreateWorkDetail = (data: IWorkDetail) => {
        fetchCreateWorkDetail({data, projectId, parentId: workDetail.id})
        setIsCreate(false)
    }

    const handleRemoveWorkDetail = () => {
        fetchDeleteWorkDetail({projectId, workDetailId: workDetail.id})
    }

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    return (
        <>
            {isEditing ? (
                <FormWorkDetailRow
                    workDetail={workDetail}
                    onDelete={()=>setIsEditing(false)}
                    onSubmit={handleSubmit}
                    disabled={isFirstElement}
                    disabledActions
                    padding={padding}
                />
            ): (
                <Table.Row className={className} onDoubleClick={handleDoubleClick}>
                    <ActionButtonCell onCreate={()=>setIsCreate(true)} onDelete={handleRemoveWorkDetail} padding={padding} disabled={isCreate}/>
                    <Table.Cell>{workDetail.rowName}</Table.Cell>
                    <Table.Cell>{workDetail.salary}</Table.Cell>
                    <Table.Cell>{workDetail.equipmentCosts}</Table.Cell>
                    <Table.Cell>{workDetail.overheads}</Table.Cell>
                    <Table.Cell>{workDetail.estimatedProfit}</Table.Cell>
                </Table.Row>
            )
            }
            {isCreate &&
              <FormWorkDetailRow onSubmit={handleCreateWorkDetail} onDelete={()=>setIsCreate(false)} padding={padding + 20}/>
            }
            {workDetail.child && workDetail.child.length > 0 && (
                workDetail.child.map(child => (
                    <WorkDetailRow key={child.id} workDetail={child} padding={padding + 20} projectId={projectId} />
                ))
            )}
        </>
    );
};
