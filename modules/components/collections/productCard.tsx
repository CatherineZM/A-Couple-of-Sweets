"use client"
import { useState } from "react";

// types
import { Product, DietaryRestriction } from "@/modules/gql/graphql";

// internal components
import { Paragraph, RichTextRender, CldImage, Button } from "@/modules/components/utils/index";

// external components
import { LuWheatOff, LuMilkOff, LuNutOff } from "react-icons/lu";

interface Props {
    product: Product;
}

export default function ProductCard (props: Props): JSX.Element {
    const { product } = props;
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col h-full w-full gap-y-2.5">
            {product.productPhoto[0] && (
                <CldImage
                    src={`${product.productPhoto[0].url}`}
                    alt={product.name}
                    width={800}
                    height={800}
                    sizes="25vw, (min-width: 1024px) 50vw"
                    className="aspect-square w-full object-cover rounded-lg"
                />
            )}
            <Paragraph strong className="">
                {product.name}
            </Paragraph>

            <div className="flex flex-row justify-between">
                {product.price && (
                    <div className="gap-y-0">
                        <RichTextRender content={product.price?.raw} />
                    </div>
                )}
                <div className="flex flex-row gap-x-1">
                    {product.dietary.includes(
                        DietaryRestriction.GlutenFree
                    ) && (
                        <div className="flex items-center justify-center border-2 rounded-full border-olive h-7 w-7">
                            <LuWheatOff className="text-olive h-5 w-5" />
                        </div>
                    )}
                    {product.dietary.includes(DietaryRestriction.DairyFree) && (
                        <div className="flex items-center justify-center border-2 rounded-full border-olive h-7 w-7">
                            <LuMilkOff className="text-olive h-5 w-5" />
                        </div>
                    )}
                    {product.dietary.includes(DietaryRestriction.NutFree) && (
                        <div className="flex items-center justify-center border-2 rounded-full border-olive h-7 w-7">
                            <LuNutOff className="text-olive h-5 w-5" />
                        </div>
                    )}
                </div>
            </div>

            <RichTextRender content={product.shortDescription.raw} />
            <Button
                action={() =>
                    window.open(
                        "https://www.instagram.com/a_couple_ofsweets?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                        "_blank"
                    )
                }
                fill
                theme="dark">
                Order Now
            </Button>
            <Button action={() => setOpen(true)} type="button" theme="dark">
                Read More
            </Button>
        </div>
    );
}