import { HTMLAttributes } from 'react';
declare type Props = HTMLAttributes<HTMLDivElement> & {
    html: string;
};
export declare function DangerouslySetHtmlContent({ html, dangerouslySetInnerHTML, ...rest }: Props): JSX.Element;
export default DangerouslySetHtmlContent;
