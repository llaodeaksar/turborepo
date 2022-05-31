/// <reference types="react" />
export interface UnorderedListProps extends React.HTMLAttributes<HTMLUListElement> {
    variant: 'unordered';
}
export interface OrderedListProps extends React.OlHTMLAttributes<HTMLOListElement> {
    variant: 'ordered';
}
export declare type ListProps = OrderedListProps | UnorderedListProps;
//# sourceMappingURL=List.types.d.ts.map