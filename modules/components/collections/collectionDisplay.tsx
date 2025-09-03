import { Product } from "@/modules/gql/graphql";
import { H2, Paragraph } from "@/modules/components/utils";
import { RichText } from "@graphcms/rich-text-react-renderer";
import ProductCard from "./productCard";
interface Props {
    title: string;
    description?: {
        raw: any;
    };
    products: Array<Product>;
}

export default function CollectionDisplay(props: Props): JSX.Element {
    const { title, description, products } = props;
    const productLessThan4 = products.length < 4;
    return (
        <div className="flex flex-col items-center gap-y-6">
            <div className="flex flex-col gap-y-3 items-center w-full">
                <H2 className="text-ganache">{title}</H2>
                <RichText
                    content={description?.raw}
                    renderers={{
                        p: ({ children }) => (
                            <Paragraph
                                strong
                                className="text-ganache text-center w-full md:w-[80%]">
                                {children}
                            </Paragraph>
                        ),
                    }}
                />
            </div>

            <div
                className={`grid grid-cols-2 gap-x-3 gap-y-4 ${
                    productLessThan4
                        ? "md:auto-cols-max md:grid-flow-col justify-between"
                        : "md:grid-cols-4 md:gap-x-14 md:gap-y-6"
                } 
                w-full `}>
                {products.map((product, index) => (
                    <ProductCard
                        product={product}
                        key={index}
                        collection={title}
                    />
                ))}
            </div>
        </div>
    );
}
