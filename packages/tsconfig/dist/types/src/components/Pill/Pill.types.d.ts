/// <reference types="react" />
import { CSS } from 'src/lib/stitches.config';
export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    variant: 'info' | 'danger' | 'success' | 'warning';
    css?: CSS;
}
//# sourceMappingURL=Pill.types.d.ts.map