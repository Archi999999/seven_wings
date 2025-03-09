import cn from "classnames";

import {ListIcon, TrashIcon} from "../../../../shared/assets/icons/fill";
import {Button} from "../../../../shared/ui/Button/Button.tsx";
import {Table} from "../../../../shared/ui/Table/Table.tsx";

import style from './ActionButtonCell.module.scss'

interface IActionButtonCell {
    indentLeft?: number
    onCreate?: () => void
    onDelete?: () => void
    disabled?: boolean
    totalHeight?: number
    isFirstElement?: boolean
}

export const ActionButtonCell = ({ indentLeft = 0, onCreate, onDelete, disabled, totalHeight, isFirstElement}: IActionButtonCell) => {
    return (
        <Table.Cell style={{paddingLeft: indentLeft}} onDoubleClick={e=> e.stopPropagation()} className={style.cell}>
            <div className={style.buttons_wrapper} >
                <Button className={style.button} onClick={onCreate} disabled={disabled}><ListIcon /></Button>
                <Button className={style.button} onClick={onDelete} disabled={disabled}><TrashIcon className={style.icon_trash}/></Button>
                <div className={cn(style.line, style.line_down)} style={{marginLeft: indentLeft, height: (totalHeight ? totalHeight : 0)}}/>
                {!isFirstElement && <div className={cn(style.line, style.line_left)} style={{left: indentLeft - 6}}/>}
            </div>
        </Table.Cell>
    );
};
