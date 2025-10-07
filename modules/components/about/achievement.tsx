// internal component
import { H2, H4, RichTextRender, CldImage } from "@/modules/components/utils";

// external component
import { motion } from "framer-motion";
import { LuAward, LuCake, LuChefHat, LuCrown, LuCookingPot } from "react-icons/lu";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface Props {
    achievements: {
        title: string | null | undefined;
        achievementItem: Array<{
            date: string;
            name: string;
            image: Array<any>;
            description: {
                raw: any;
            };
        }>;
    };
}

export default function Achievement({ achievements }: Props) {
    
    const styleList = [
        {
            background: "#4F5626",
            color: "#F0EAD6",
            iconBg: "#4F5626",
            iconColor: "#F0EAD6",
            icon: <LuAward />,
        },
        {
            background: "#BAB86C",
            color: "#3D2217",
            iconBg: "#BAB86C",
            iconColor: "#3D2217",
            icon: <LuCake />,
        },
        {
            background: "#3D2217",
            color: "#F0EAD6",
            iconBg: "#3D2217",
            iconColor: "#F0EAD6",
            icon: <LuChefHat />,
        },
    ];

    return (
        <div className="relative z-0 max-w-screen-2xl w-full flex flex-col items-center">
            <H2 className="text-ganache">{achievements.title}</H2>
            <VerticalTimeline lineColor="#4F5626" animate>
                {achievements.achievementItem.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        style={{ zIndex: 0 }}
                        contentStyle={{
                            background: styleList[index].background,
                            color: styleList[index].color,
                        }}
                        date={item.date}
                        dateClassName="text-cream md:text-ganache"
                        iconStyle={{
                            background: styleList[index].iconBg,
                            color: styleList[index].iconColor,
                        }}
                        icon={styleList[index].icon}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}>
                            <H4>{item.name}</H4>
                            <RichTextRender
                                content={item.description.raw}
                                classNameH2="font-dmsans"
                            />
                            <div className="flex flex-row gap-x-2 justify-center pt-3">
                                {item.image &&
                                    item.image.map((img, imgIdx) => (
                                        <CldImage
                                            key={imgIdx}
                                            src={img.url}
                                            alt="A Couple of Sweets"
                                            width={img.width}
                                            height={img.width}
                                            sizes="25vw, (min-width: 1024px) 50vw"
                                            className="aspect-square w-[80%] object-cover"
                                        />
                                    ))}
                            </div>
                        </motion.div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
}
