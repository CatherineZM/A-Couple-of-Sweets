interface Props {
    className?: string;
    children: React.ReactNode;
}

export default function H3(props: Props): JSX.Element {
    const { className, children } = props;
    return (
        <h3
            className={`font-dmsans font-semibold text-xl md:text-[32px] ${className}`}>
            {children}
        </h3>
    );
}
