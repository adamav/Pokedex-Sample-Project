import { HtmlHTMLAttributes } from "react";
export interface ButtonInterface extends HtmlHTMLAttributes<HTMLButtonElement>{

    label : string;
    disabled? : boolean
}