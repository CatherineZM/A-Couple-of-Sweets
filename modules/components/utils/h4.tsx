interface Props {
    className?: string;
    children: React.ReactNode;
}

export default function H4(props: Props): JSX.Element {
    const { className, children } = props;
    return (
        <h4
            className={`font-dmsans font-semibold text-lg md:text-2xl ${className}`}>
            {children}
        </h4>
    );
}
