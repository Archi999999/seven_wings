import {useState} from "react";

import {
    useDeleteWorkDetailMutation,
    useUpdateWorkDetailMutation
} from "../../../../services/projects/projects.service.ts";
import {IWorkDetail} from "../../../../services/projects/types.ts";
import {useFetchCreateWorkDetail} from "../../../../services/projects/utils/useFetchCreateWorkDetail.ts";
import {Table} from "../../../../shared/ui/Table/Table.tsx";
import {countTotalHeight} from "../../common/utils/countTotalHeigt.ts";
import {ActionButtonCell} from "../ActionButtonCell/ActionButtonCell.tsx";
import {FormWorkDetailRow} from "../FormWorkDetailRow/FormWorkDetailRow.tsx";

interface IWorkDetailRow {
    className?: string
    workDetail: IWorkDetail
    indentLeft: number
    projectId: number
    isFirstElement?: boolean
}

export const WorkDetailRow = ({className, workDetail, indentLeft, projectId, isFirstElement }: IWorkDetailRow) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isCreate, setIsCreate] = useState(false);

    const [fetchUpdateWorkDetail, {isLoading: isFetchingUpdate}] = useUpdateWorkDetailMutation()
    const [fetchDeleteWorkDetail, {isLoading: isFetchingDelete}] = useDeleteWorkDetailMutation()
    const { fetchCreateWorkDetail, isLoading: isFetchingCreate } = useFetchCreateWorkDetail()

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

    const totalHeight = countTotalHeight(workDetail, isCreate)

    return (
        <>
            {isEditing ? (
                <FormWorkDetailRow
                    workDetail={workDetail}
                    onDelete={()=>setIsEditing(false)}
                    onSubmit={handleSubmit}
                    disabledActions
                    indentLeft={indentLeft}
                    disabled={isFetchingUpdate}
                />
            ): (
                <Table.Row className={className} onDoubleClick={handleDoubleClick}>
                    <ActionButtonCell
                        onCreate={()=>setIsCreate(true)}
                        onDelete={handleRemoveWorkDetail}
                        indentLeft={indentLeft}
                        isFirstElement={isFirstElement}
                        disabled={isCreate
                            || isFetchingDelete
                            || isFetchingCreate
                    }
                        totalHeight={totalHeight}
                    />
                    <Table.Cell>{workDetail.rowName}</Table.Cell>
                    <Table.Cell>{workDetail.salary}</Table.Cell>
                    <Table.Cell>{workDetail.equipmentCosts}</Table.Cell>
                    <Table.Cell>{workDetail.overheads}</Table.Cell>
                    <Table.Cell>{workDetail.estimatedProfit}</Table.Cell>
                </Table.Row>
            )
            }
            {isCreate &&
              <FormWorkDetailRow onSubmit={handleCreateWorkDetail} onDelete={()=>setIsCreate(false)} indentLeft={indentLeft + 20}/>
            }
            {workDetail.child && workDetail.child.length > 0 && (
                workDetail.child.map(child => (
                    <WorkDetailRow key={child.id} workDetail={child} indentLeft={indentLeft + 20} projectId={projectId} />
                ))
            )}
        </>
    );
};
