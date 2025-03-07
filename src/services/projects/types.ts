export interface IWorkDetail {
    id: number;
    rowName: string;
    total: number;
    salary: number;
    mimExploitation: number;
    machineOperatorSalary: number;
    materials: number;
    mainCosts: number;
    supportCosts: number;
    equipmentCosts: number;
    overheads: number;
    estimatedProfit: number;
    child: IWorkDetail[] | [];
}

export interface IUpdateWorkDetail {
    workDetail: IWorkDetail;
    projectId: number;
}

export interface ICreateWorkDetail {
    projectId: number;
    workDetail: INewWorkDetail;
}

export interface INewWorkDetail extends Omit<IWorkDetail, 'id' | 'total' | 'child'> {
    parentId: number | null;
}

export interface IResUpdateWorkDetail {
    current: IWorkDetail,
    changed: IWorkDetail[],
}

export interface IDeleteWorkDetail {
    projectId: number,
    workDetailId: number
}