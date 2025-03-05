import cn from "classnames";

import {StackGridIcon} from "../../../shared/assets/icons/fill";
import {Button, IButton} from "../../../shared/ui/Button/Button.tsx";

import style from './ProjectListItem.module.scss'

interface IProjectListItem extends IButton{
    label: string;
}

export const ProjectListItem = ({className, label, ...restProps}: IProjectListItem) => {
    return (
        <Button className={cn(style.project_item, className)} {...restProps}>
            <StackGridIcon/>
            {label}
        </Button>
    );
};
