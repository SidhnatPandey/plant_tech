export interface DesignElement {
    id: string;
    type: 'image' | 'sticker';
    src: string;
    x: number;
    y: number;
    width: number;
    height: number;
    isSelected: boolean;
}
  
export interface Position {
    x: number;
    y: number;
}