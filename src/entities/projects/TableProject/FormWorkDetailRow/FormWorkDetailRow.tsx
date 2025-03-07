import {IWorkDetail} from "../../../../services/projects/types.ts";
import {Table} from "../../../../shared/ui/Table/Table.tsx";
import {ActionButtonCell} from "../ActionButtonCell/ActionButtonCell.tsx";

import {FormWorkDetail} from "./FormWorkDetail/FormWorkDetail.tsx";


interface IFormWorkDetailRow {
    className?: string
    padding?: number
    onSubmit: (workDetail: IWorkDetail) => void
    onCreate?: () => void
    onDelete?: () => void
    workDetail?: IWorkDetail
    disabled?: boolean
    disabledActions?: boolean
}

export const FormWorkDetailRow = ({className, padding, onCreate, onDelete, disabledActions, ...restProps}: IFormWorkDetailRow) => {
    return (
        <Table.Row className={className}>
            <ActionButtonCell onDelete={onDelete} onCreate={onCreate} padding={padding} disabled={disabledActions}/>
            <FormWorkDetail {...restProps}/>
        </Table.Row>
    );
};
