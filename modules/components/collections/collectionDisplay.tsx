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
                className={`${
                    productLessThan4
                        ? "flex justify-between gap-x-24"
                        : "grid grid-cols-4 gap-x-14"
                } 
                w-full`}>
                {products.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))}
            </div>
        </div>
    );
}
