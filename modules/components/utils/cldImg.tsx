"use client";

import { CldImage as CldImageDefault, CldImageProps } from "next-cloudinary";

const CldImage = (props: CldImageProps): React.JSX.Element => {
    return <CldImageDefault {...props} crossOrigin="anonymous" />;
};

export default CldImage;
