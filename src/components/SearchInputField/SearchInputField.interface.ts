import { InputFieldInterface } from "components/InputField/InputField.interface";

export interface SearchInputInterface extends InputFieldInterface{

    onSearchEntered?: (search: string) => void;
}