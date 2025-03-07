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

export type IChangedWorkDetail = Omit<IWorkDetail, 'child' >

export interface IResMutationWorkDetail {
    current: IWorkDetail,
    changed: IChangedWorkDetail[],
}

export type IDeleteWorkDetailResponse = {
    current: null;
    changed: IChangedWorkDetail[];
};

export interface IDeleteWorkDetail {
    projectId: number,
    workDetailId: number
}