import {ListIcon, TrashIcon} from "../../../../shared/assets/icons/fill";
import {Button} from "../../../../shared/ui/Button/Button.tsx";
import {Table} from "../../../../shared/ui/Table/Table.tsx";

import style from './ActionButtonCell.module.scss'

interface IActionButtonCell {
    padding?: number
    onCreate?: () => void
    onDelete?: () => void
    disabled?: boolean
}

export const ActionButtonCell = ({ padding, onCreate, onDelete, disabled}: IActionButtonCell) => {
    return (
        <Table.Cell style={{paddingLeft: padding}} onDoubleClick={e=> e.stopPropagation()}>
            <div className={style.buttons_wrapper} >
                <Button className={style.button} onClick={onCreate} disabled={disabled}><ListIcon /></Button>
                <Button className={style.button} onClick={onDelete} disabled={disabled}><TrashIcon className={style.icon_trash}/></Button>
                {/*<div className={style.line}/>*/}
            </div>
        </Table.Cell>
    );
};
