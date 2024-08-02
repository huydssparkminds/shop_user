import { TypeProduct } from "@/models/model";


export const handlefilterCategory = (data: TypeProduct[] = [], paramsFilter: string) => {
    return data.filter((e) => {
        const category = e.category.name.toLowerCase();

        switch (paramsFilter.toLowerCase()) {
            case 'all':
                return 'all';
            case 'chair':
                return category === 'Chair';
            case 'lamp':
                return category === 'Lamp';
            case "sofa":
                return category === "Sofa";
            default:
                return false;
        }
    });
};