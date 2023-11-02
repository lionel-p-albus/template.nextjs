export interface DropdownOpt {
    id?: string | number;
    label: string;
    value: number | string;
}

export interface DropdownBtnOpt {
    data: DropdownOpt;
    color?: string;
}