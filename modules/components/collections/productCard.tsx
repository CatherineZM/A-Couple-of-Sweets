// types
import { Product } from "@/modules/gql/graphql";

// components
import { Paragraph, RichTextRender } from "@/modules/components/utils/index";
import Image from "next/image";

interface Props {
    product: Product;
}

export default function ProductCard (props: Props): JSX.Element {
    const { product } = props

    return (
        <div className="flex flex-col h-full w-full gap-y-2.5">
            {product.photos[0] && (
                <Image
                    src={`${product.photos[0].url}`}
                    alt={product.photos[0].fileName}
                    width={800}
                    height={800}
                    sizes="25vw, (min-width: 1024px) 50vw"
                    className="aspect-square w-full object-cover rounded-lg"
                />
            )}
            <Paragraph strong className="">
                {product.name}
            </Paragraph>
            {product.price && (
                <div className="gap-y-0">
                    <RichTextRender content={product.price?.raw} />
                </div>
            )}
            <RichTextRender content={product.shortDescription.raw} />
        </div>
    );
}