"use client";

interface Props {
    className?: string;
    children: React.ReactNode;
    theme:'light' | 'dark'
    action?: any;
    fill?: boolean;
    disabled?: any;
    type?: any
    isActive?: boolean;
}

export default function Button(props: Props): JSX.Element {
    const { className, action, children, theme, fill, disabled, type, isActive } = props;

    return (
        <button
            onClick={action}
            type={type}
            aria-pressed={isActive || undefined}
            data-active={isActive ? true : undefined}
            className={`${className} border-2 rounded-2xl duration-300 transition-all ease-in-out
                ${
                    theme === "dark"
                        ? fill
                            ? "bg-whiskey border-whiskey text-ganache hover:bg-[#C69C6D] hover:border-[#C69C6D] data-[active=true]:bg-buttercream data-[active=true]:border-buttercream disabled:bg-[#A2A2A2] disabled:text-[#3F3F3F] disabled:border-[#A2A2A2]"
                            : "bg-transparent border-ganache text-ganache hover:bg-whiskey/70 data-[active=true]:bg-pistachio/50 disabled:bg-transparent disabled:text-[#9E9E9E]/30 disabled:border-[#7F7F7F]"
                        : fill
                        ? "bg-cream border-cream text-ganache hover:bg-pistachio hover:border-pistachio data-[active=true]:bg-olive data-[active=true]:border-olive data-[active=true]:text-cream disabled:bg-[#D0D0D0] disabled:text-[#3F3F3F] disabled:border-[#D0D0D0]"
                        : "bg-transparent border-cream text-cream hover:bg-pistachio/70 data-[active=true]:bg-olive/60 disabled:bg-transparent disabled:text-[#D6D6D6] disabled:border-[#D6D6D6]"
                }`}
            disabled={disabled}>
            {children}
        </button>
    );
}
