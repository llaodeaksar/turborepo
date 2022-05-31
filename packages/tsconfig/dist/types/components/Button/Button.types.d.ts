/// <reference types="react" />
import { ForwardRefComponent } from 'framer-motion';
export declare type MainButtonVariant = 'primary' | 'secondary';
export declare type IconButtonVariant = 'icon';
interface BaseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    as?: ForwardRefComponent<HTMLButtonElement, any>;
    type?: 'button' | 'reset' | 'submit';
}
interface MainButtonProps extends BaseButtonProps {
    variant: MainButtonVariant;
    icon?: never;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}
interface IconButtonProps extends BaseButtonProps {
    variant: IconButtonVariant;
    icon: React.ReactNode | HTMLOrSVGElement;
    startIcon?: never;
    endIcon?: never;
}
export declare type ButtonProps<T> = (MainButtonProps | IconButtonProps) & T;
export {};
//# sourceMappingURL=Button.types.d.ts.map