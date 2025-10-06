
interface Props{
    markets: {
        title?: string | null | undefined;
        marketItem: Array<{
            marketDate: any;
            location: string;
            streetAddress?: string | null;
            time?: string | null;
            description?: {
                raw: any;
            } | null;
            photos?: {
                image: any;
                captionAltText?: string | null;
            } | null;
        }>;
    };
}

export default function MarketsDisplay({ markets }: Props) {
    return(
        <div className='max-w-screen-2xl pt-10 w-full flex flex-col items-center'>
        </div>
    )
        
}