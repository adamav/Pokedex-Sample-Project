export interface SearchHistoryOverlayInterface{

    show? : boolean,
    onClickItem?: (name:string) => void;
    onClose?: () => void;
}