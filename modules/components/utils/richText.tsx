// types
import { RichTextContent } from "@graphcms/rich-text-types";
// component
import { RichText } from "@graphcms/rich-text-react-renderer";
import { H1, H2, H3, H4, Paragraph } from "./index";

interface Props {
    classNameH1?: string;
    classNameH2?: string;
    classNameH3?: string;
    classNameH4?: string;
    classNameP?: string;
    content: RichTextContent;
}

export default function RichTextRender(props: Props): JSX.Element {
    const { classNameH1, classNameH2, classNameH3, classNameH4, classNameP, content } = props;
    return (
        <RichText
            content={content}
            renderers={{
                h1: ({ children }) => (
                    <H1 className={`${classNameH1}`}>{children}</H1>
                ),
                h2: ({ children }) => (
                    <H2 className={`${classNameH2}`}>{children}</H2>
                ),
                h3: ({ children }) => (
                    <H3 className={`${classNameH3}`}>{children}</H3>
                ),
                h4: ({ children }) => (
                    <H4 className={`${classNameH4}`}>{children}</H4>
                ),
                p: ({ children }) => (
                    <Paragraph className={`${classNameP}`}>{children}</Paragraph>
                ),
            }}
        />
    );
}
