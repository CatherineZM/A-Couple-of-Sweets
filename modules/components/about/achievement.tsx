
interface Props{
    achievements: {
        title: string | null | undefined;
        achievementItem: Array<{
            date: any;
            name: string;
            image: Array<any>;
            description: {
                raw: any;
            };
        }>;
    };
}

export default function Achievement({ achievements }: Props) {
    return(
        <div className='max-w-screen-2xl pt-10 w-full flex flex-col items-center'>
        </div>
    )
        
}