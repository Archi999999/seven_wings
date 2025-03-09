import {IWorkDetail} from "../../../../services/projects/types.ts";


export const countTotalHeight = (workDetail: IWorkDetail, isCreate: boolean) => {

    const countHeightChilds = (workDetails: IWorkDetail[], isCreate: boolean): number => {
        const baseHeight = 53;
        return workDetails.reduce((totalHeight, workDetail) => {
            const childHeight = countHeightChilds(workDetail.child, isCreate);
            return totalHeight + childHeight + 7 ;
        }, baseHeight);
    }

    return workDetail.child.length === 0
        ? 0 + (isCreate ? 53 : 0)
        : countHeightChilds(workDetail.child.slice(0, -1), isCreate)+ (isCreate ? 60 : 0);
}

