interface Props {
    className?: string;
    children: React.ReactNode;
}

export default function H2(props: Props): JSX.Element {
    const { className, children } = props;
    return (
        <h2
            className={`font-marcellus text-2xl md:text-4xl ${className}`}>
            {children}
        </h2>
    );
}
