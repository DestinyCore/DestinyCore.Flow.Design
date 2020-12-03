/***
 * attrs Attribute Definition
 */
export interface IArrtsEntity{
    /**
     * Body Attribute
     */
    body:IBody,
    /**
     * label Attribute
     */
    label:ILabel,
}
/**
 * Stroke  Public Attribute
 */
export interface IStroke{
        /**
     * 边框颜色
     */
    stroke:string,
}
/**
 * Fill  Public Attribute
 */
export interface IFill{
            /**
     * 背景色
     */
    fill:string,
}

/**
 * Body Attribute Definition 
 */
export interface IBody extends IFill,IStroke {
    /**
     * 高度
     */
    // refHeight:number,
    /**
     * 宽度
     */
    // refWidth:number,

}
/**
 * Label Attribute Definition
 */
export interface ILabel extends IFill{
    /**
     * 字体大小
     */
    fontSize:number
}