interface Props {
    className?: string;
    strong?: boolean;
    weak?: boolean;
    children: React.ReactNode;
}

export default function Paragraph(props: Props): JSX.Element {
    const { className, strong, weak, children } = props;
    return (
        <p
            className={`font-dmsans ${className} ${
                strong
                    ? "font-medium text-base md:text-lg"
                    : weak
                    ? "font-light text-sm md:text-base"
                    : "font-normal text-base "
            }`}>
            {children}
        </p>
    );
}
