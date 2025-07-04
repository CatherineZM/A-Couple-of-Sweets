// types
import { RichTextContent } from "@graphcms/rich-text-types";
// component
import { RichText } from "@graphcms/rich-text-react-renderer";
import { H1, H2, H3, H4, Paragraph } from "./index";

interface Props {
    className?: string;
    content: RichTextContent;
}

export default function RichTextRender(props: Props): JSX.Element {
    const { className, content } = props;
    return (
        <RichText
            content={content}
            renderers={{
                h1: ({ children }) => (
                    <H1 className={`${className}`}>{children}</H1>
                ),
                h2: ({ children }) => (
                    <H2 className={`${className}`}>{children}</H2>
                ),
                h3: ({ children }) => (
                    <H3 className={`${className}`}>{children}</H3>
                ),
                h4: ({ children }) => (
                    <H4 className={`${className}`}>{children}</H4>
                ),
                p: ({ children }) => (
                    <Paragraph className={`${className}`}>{children}</Paragraph>
                ),
            }}
        />
    );
}
