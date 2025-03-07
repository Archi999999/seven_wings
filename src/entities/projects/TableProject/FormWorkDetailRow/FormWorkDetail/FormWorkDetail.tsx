import {KeyboardEvent} from 'react'

import {useController, useForm} from "react-hook-form";

import {IWorkDetail} from "../../../../../services/projects/types.ts";
import {Input} from "../../../../../shared/ui/Input/Input.tsx";
import {Table} from "../../../../../shared/ui/Table/Table.tsx";

interface IFormWorkDetail {
    workDetail?: IWorkDetail
    onSubmit: (workDetail: IWorkDetail) => void
    disabled?: boolean
}

export const FormWorkDetail = ({ workDetail, onSubmit, disabled }: IFormWorkDetail) => {
    const { control, handleSubmit } = useForm({
        defaultValues: workDetail
    });

    const { field: rowNameField } = useController({
        name: 'rowName',
        control,
    });

    const { field: salaryField } = useController({
        name: 'salary',
        control,
    });

    const { field: equipmentCostsField } = useController({
        name: 'equipmentCosts',
        control,
    });

    const { field: overheadsField } = useController({
        name: 'overheads',
        control,
    });

    const { field: estimatedProfitField } = useController({
        name: 'estimatedProfit',
        control,
    });

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmit((data) => {
                const updatedWorkDetail = {
                    ...data,
                    rowName: data.rowName || '',
                    salary: Number(data.salary) || 0,
                    equipmentCosts: Number(data.equipmentCosts) || 0,
                    overheads: Number(data.overheads) || 0,
                    estimatedProfit: Number(data.estimatedProfit) || 0,
                };

                onSubmit(updatedWorkDetail)
            })();
        }
    };

    return (
        <>
            <Table.Cell>
                <Input {...rowNameField} onKeyDown={handleKeyDown}/>
            </Table.Cell>
            <Table.Cell>
                <Input {...salaryField} onKeyDown={handleKeyDown} type="number" min={0} disabled={disabled} />
            </Table.Cell>
            <Table.Cell>
                <Input {...equipmentCostsField} onKeyDown={handleKeyDown} type="number" min={0}  disabled={disabled} />
            </Table.Cell>
            <Table.Cell>
                <Input {...overheadsField} onKeyDown={handleKeyDown} type="number" min={0}  disabled={disabled} />
            </Table.Cell>
            <Table.Cell>
                <Input {...estimatedProfitField} onKeyDown={handleKeyDown} type="number"  disabled={disabled} />
            </Table.Cell>
        </>
    );
};
