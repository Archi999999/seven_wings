import { useCreateWorkDetailMutation } from "../projects.service.ts";
import { INewWorkDetail, IWorkDetail } from "../types.ts";

interface ICreateWorkDetail {
    data: IWorkDetail;
    projectId: number;
    parentId?: number;
}

export const useFetchCreateWorkDetail = () => {
    const [createWorkDetail, { isLoading, isError, data }] = useCreateWorkDetailMutation();

    const fetchCreateWorkDetail = async ({ data, projectId, parentId }: ICreateWorkDetail) => {
        const newWorkDetail: INewWorkDetail = {
            ...data,
            parentId: parentId || null,
            mainCosts: 0,
            materials: 0,
            mimExploitation: 0,
            supportCosts: 0,
            machineOperatorSalary: 0,
        };

        await createWorkDetail({ projectId, workDetail: newWorkDetail });
    };

    return { fetchCreateWorkDetail, isLoading, isError, data };
};