import {ButtonHTMLAttributes} from "react";

import cn from 'classnames';

import style from './Button.module.scss'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'outline'
}

export const Button = ({className, children, variant = 'outline', ...restProps}: IButton) => {
    return (
        <button className={cn(style.button, style[variant], className)} {...restProps}>
            {children}
        </button>
    );
};
