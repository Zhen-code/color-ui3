export const defaultNamespace = "x";

/**
 * 命名空间结果接口
 */
export interface NamespaceResult {
  /** 命名空间 */
  namespace: string;
  /** 创建块级类名 */
  block: (blockSuffix?: string) => string;
  /** 创建元素类名 */
  element: (element?: string) => string;
  /** 创建修饰符类名 */
  modifier: (modifier?: string, value?: string | number | boolean) => string;
  /** 创建状态类名 */
  is: (activeName: string, active?: boolean) => string;
}

/**
 * 使用命名空间创建BEM风格的类名
 * @param blocks - 块名
 * @returns 命名空间结果对象
 */
export const useNamespace = (blocks: string): NamespaceResult => {
  const namespace = defaultNamespace;

  const block = (blockSuffix?: string): string => {
    return _bem(namespace, blocks, blockSuffix, "", "", "");
  };

  const element = (element?: string): string =>
    element ? _bem(namespace, blocks, "", element, "", "") : "";

  const modifier = (modifier?: string, value?: string | number | boolean): string =>
    modifier ? _bem(namespace, blocks, "", "", modifier, String(value)) : "";

  const is = (activeName: string, active?: boolean): string =>
    activeName && active ? `is-${activeName}` : "";

  return {
    namespace,
    block,
    element,
    modifier,
    is,
  };
};

/**
 * 生成BEM风格的类名
 * @param namespace - 命名空间
 * @param block - 块名
 * @param blockSuffix - 块后缀
 * @param element - 元素名
 * @param modifier - 修饰符名
 * @param modifierValue - 修饰符值
 * @returns BEM风格的类名
 */
const _bem = (
  namespace: string,
  block: string,
  blockSuffix?: string,
  element?: string,
  modifier?: string,
  modifierValue?: string
): string => {
  let cls = `${namespace}-${block}`;
  blockSuffix && (cls += `-${blockSuffix}`);
  element && (cls += `__${element}`);
  modifier && (cls += `--${modifier}`);
  modifierValue && (cls += `_${modifierValue}`);

  return cls;
};