
interface Props{
    about: {
        title: string | null | undefined;
        aboutList: Array<{
            title: string;
            image: Array<any>;
            description: {
                raw: any;
            };
        }>;
    };
}

export default function AboutDisplay({ about }: Props) {
    return(
        <div className='max-w-screen-2xl pt-10 w-full flex flex-col items-center'>
        </div>
    )
        
}