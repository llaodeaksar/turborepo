import React from 'react';
export interface RadioContextType {
    name: HTMLInputElement['name'];
    onChange: React.FormEventHandler<HTMLInputElement>;
}
export declare type RadioGroupOptions = {
    direction?: 'vertical' | 'horizontal';
};
export declare type RadioGroupProps = RadioContextType & RadioGroupOptions & {
    id?: string;
    ['data-testid']?: string;
};
export interface RadioItemProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: React.ReactNode;
    id: string;
    ['aria-label']: string;
}
//# sourceMappingURL=Radio.types.d.ts.map