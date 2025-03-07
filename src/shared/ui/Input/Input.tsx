import {FC, InputHTMLAttributes} from "react";

import style from './Input.module.scss';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const Input: FC<IInput> = ({ className, ...restProps }) => {
    return (
        <input
            className={`${style.input} ${className || ''}`}
            {...restProps}
        />
    );
};
