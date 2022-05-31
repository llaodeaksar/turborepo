import { CardComposition, CardProps } from './Card.types';
declare function Card<T>(props: CardProps & CardComposition & T): JSX.Element;
declare namespace Card {
    var Header: any;
    var Body: any;
    var displayName: string;
}
export default Card;
//# sourceMappingURL=Card.d.ts.map