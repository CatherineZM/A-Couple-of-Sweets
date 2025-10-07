// internal component
import { H2, H3, RichTextRender, CldImage } from "@/modules/components/utils";

interface Props {
    about: {
        title: string | null | undefined;
        aboutList: Array<{
            title: string;
            photo: {
                image: any;
                captionAltText: string;
            };
            description: {
                raw: any;
            };
        }>;
    };
}

export default function AboutDisplay({ about }: Props) {
    console.log(about.aboutList);
    return (
        <div className="max-w-screen-xl px-4 md:px-6 w-full flex flex-col gap-y-4 md:gap-y-6 items-center">
            <H2 className="text-ganache">{about.title}</H2>
            {about.aboutList.map((item, index) => (
                <div
                    key={index}
                    className={`flex flex-col-reverse gap-6 md:gap-10 w-full md:max-h-[300px] justify-center ${
                        (index + 1) % 2 ? "md:flex-row-reverse" : "md:flex-row"
                    }`}>
                    {/* image column wrapper controls the flex-basis */}
                    <div className="basis-full md:basis-1/3 h-full aspect-square flex justify-center">
                        <CldImage
                            src={item.photo.image.url}
                            alt={
                                item.photo.captionAltText ||
                                "A Couple of Sweets"
                            }
                            width={item.photo.image.width}
                            height={item.photo.image.height}
                            sizes="(min-width: 768px) 33vw, 50vw"
                            className="aspect-square object-cover w-auto h-full max-h-[300px]"
                        />
                    </div>
                    {/* text column */}
                    <div className="basis-full md:basis-2/3 text-ganache flex flex-col justify-center gap-y-1.5 md:gap-y-3 max-w-[600px]">
                        <H3>{item.title}</H3>
                        <RichTextRender content={item.description.raw} />
                    </div>
                </div>
            ))}
        </div>
    );
}
