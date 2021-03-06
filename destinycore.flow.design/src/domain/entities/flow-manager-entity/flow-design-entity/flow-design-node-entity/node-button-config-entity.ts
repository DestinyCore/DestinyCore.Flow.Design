import { NodeTypeEnum } from "./flow-design-node-enum";

export interface INodeBase {
    // 形状
    shape: string;
    // 节点文字
    label: string;
  }
  export interface INodeTool extends INodeBase {
    icon: string;
    type: NodeTypeEnum;
  }