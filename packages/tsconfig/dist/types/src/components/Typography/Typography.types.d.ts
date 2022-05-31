/// <reference types="react" />
import { CSS, VariantProps } from '../../lib/stitches.config';
import { DEFAULT_TAG } from './Typography.constants';
import Text from './TypographyText';
export declare type TextSizeVariants = Pick<VariantProps<typeof Text>, 'size' | 'variant' | 'gradient'>;
export declare type EMProps = React.HTMLAttributes<HTMLParagraphElement> & TextSizeVariants;
export declare type StrongProps = React.HTMLAttributes<HTMLParagraphElement> & TextSizeVariants;
export declare type HeadingSizeVariants = '1' | '2' | '3' | '4';
export declare type HeadingVariants = {
    size?: HeadingSizeVariants;
} & Omit<VariantProps<typeof Text>, 'size'>;
export declare type HeadingProps = React.ComponentProps<typeof DEFAULT_TAG> & HeadingVariants & {
    css?: CSS;
    as?: any;
};
export declare type ShortHandHeadingProps = Omit<HeadingProps, 'size' | 'as'>;
//# sourceMappingURL=Typography.types.d.ts.map