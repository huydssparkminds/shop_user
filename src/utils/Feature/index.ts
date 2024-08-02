import { TypeProduct } from "@/models/model";


export const handlefilterCategory = (data: TypeProduct[] = [], paramsFilter: string) => {
    
    if(paramsFilter.toLowerCase() === 'all'){
        return data;
    }
    return data.filter((e) => {
        const category = e.category.name.toLowerCase();

        switch (paramsFilter.toLowerCase()) {
            case 'chair':
                return category === 'chair';
            case 'lamp':
                return category === 'lamp';
            case "sofa":
                return category === "sofa";
            default:
                return false;
        }
    });
};