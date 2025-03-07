import {FC, TableHTMLAttributes} from "react";

import cn from "classnames";


import style from './Table.module.scss'

const Root: FC<TableHTMLAttributes<HTMLTableElement>> =
    ({className, children, ...restProps}) => {
    return (
        <table className={cn(style.table, className)} {...restProps}>
            {children}
        </table>
    );
};

const Head: FC<TableHTMLAttributes<HTMLHeadElement>> =
    ({ children, className, ...restProps }) => {
    return (
        <thead className={cn(style.thead, className)} {...restProps}>
            {children}
        </thead>
    )
}

const Body: FC<TableHTMLAttributes<HTMLTableSectionElement>> =
    ({ children, className, ...restProps }) => {
    return (
        <tbody className={cn(style.tbody, className)} {...restProps}>
            {children}
        </tbody>
    )
}

const Row: FC<TableHTMLAttributes<HTMLTableRowElement>> =
    ({ children, className, ...restProps }) => {
    return (
        <tr className={cn(style.row, className)} {...restProps}>
            {children}
        </tr>
    )
}

const TitleCell: FC<TableHTMLAttributes<HTMLTableCellElement>> =
    ({ children, className, ...restProps }) => {
    return (
        <th className={cn(style.cell, style.title_cell, className)} {...restProps}>
            {children}
        </th>
    )
}

const Cell: FC<TableHTMLAttributes<HTMLTableCellElement>> =
    ({ children, className, ...restProps }) => {
    return (
        <td className={cn(style.cell, className)} {...restProps}>
            {children}
        </td>
    )
}

export const Table = { Root, Head, Body, Row, TitleCell, Cell}