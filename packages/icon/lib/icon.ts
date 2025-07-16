import { ExtractPropTypes, PropType } from 'vue';

/**
 * Icon组件的属性
 */
export const iconProps = {
  /**
   * 图标名称或图标组件
   */
  name: {
    type: String,
    default: '',
  },
  /**
   * 图标大小，支持数字或字符串，如 '20px', '2em', '2rem' 等
   */
  size: {
    type: [Number, String] as PropType<number | string>,
    default: '',
  },
  /**
   * 图标颜色
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * 是否旋转
   */
  spin: {
    type: Boolean,
    default: false,
  },
  /**
   * 旋转角度，单位为度
   */
  rotate: {
    type: [Number, String] as PropType<number | string>,
    default: 0,
  },
  /**
   * 自定义类名
   */
  customClass: {
    type: String,
    default: '',
  },
};

/**
 * Icon组件的事件
 */
export const iconEmits = {
  /**
   * 点击图标时触发
   */
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
};

/**
 * Icon组件的Props类型
 */
export type IconProps = ExtractPropTypes<typeof iconProps>;

/**
 * Icon组件的实例类型
 */
export interface IconInstance {
  /**
   * 组件的根元素
   */
  $el: HTMLElement;
}

/**
 * Icon组件的安装选项
 */
export interface IconInstallOptions {
  /**
   * 组件大小
   */
  size?: number | string;
  /**
   * 默认前缀
   */
  prefix?: string;
  /**
   * 默认命名空间
   */
  namespace?: string;
}

/**
 * 图标注册信息
 */
export interface IconRegistration {
  /**
   * 图标名称
   */
  name: string;
  /**
   * SVG路径或内容
   */
  svg: string;
}

/**
 * 图标集合
 */
export interface IconCollection {
  /**
   * 集合名称
   */
  name: string;
  /**
   * 图标注册信息数组
   */
  icons: IconRegistration[];
}

/**
 * 图标配置
 */
export interface IconConfig {
  /**
   * 默认大小
   */
  defaultSize?: number | string;
  /**
   * 默认颜色
   */
  defaultColor?: string;
  /**
   * 前缀
   */
  prefix?: string;
  /**
   * 命名空间
   */
  namespace?: string;
}

/**
 * 全局图标配置
 */
export const iconConfig: IconConfig = {
  defaultSize: '',
  defaultColor: '',
  prefix: 'icon',
  namespace: 'x',
};

/**
 * 设置全局图标配置
 * @param config - 图标配置
 */
export function setIconConfig(config: Partial<IconConfig>): void {
  Object.assign(iconConfig, config);
}

/**
 * 获取全局图标配置
 * @returns 图标配置
 */
export function getIconConfig(): IconConfig {
  return { ...iconConfig };
}