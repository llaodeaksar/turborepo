/// <reference types="react" />
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    toggled?: boolean;
    label?: React.ReactNode;
    id: string;
    ['data-testid']?: string;
    ['aria-label']: string;
}
//# sourceMappingURL=Switch.types.d.ts.map