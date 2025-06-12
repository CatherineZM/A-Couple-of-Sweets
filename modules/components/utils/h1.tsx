interface Props {
    className?: string;
    children: React.ReactNode;
}

export default function H1(props: Props): JSX.Element {
    const { className, children } = props;
    return (
        <h1
            className={`font-marcellus text-4xl md:text-5xl ${className}`}>
            {children}
        </h1>
    );
}
