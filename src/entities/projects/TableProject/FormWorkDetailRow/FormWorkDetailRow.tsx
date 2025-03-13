import {IWorkDetail} from "../../../../services/projects/types.ts";
import {Table} from "../../../../shared/ui/Table/Table.tsx";
import {ActionButtonCell} from "../ActionButtonCell/ActionButtonCell.tsx";

import {FormWorkDetail} from "./FormWorkDetail/FormWorkDetail.tsx";


interface IFormWorkDetailRow {
    className?: string
    indentLeft?: number
    onSubmit: (workDetail: IWorkDetail) => void
    onCreate?: () => void
    onDelete?: () => void
    workDetail?: IWorkDetail
    disabled?: boolean
    disabledActions?: boolean
    isFirstElement?: boolean
}

export const FormWorkDetailRow = ({className, indentLeft, onCreate, onDelete, disabledActions, isFirstElement, ...restProps}: IFormWorkDetailRow) => {
    return (
        <Table.Row className={className}>
            <ActionButtonCell onDelete={onDelete} onCreate={onCreate} indentLeft={indentLeft} disabled={disabledActions} isFirstElement={isFirstElement}/>
            <FormWorkDetail {...restProps}/>
        </Table.Row>
    );
};
