import React from "react";

import {Carousel} from "../../../../components/carousel/Carousel";
import useFetch from "../../../../src/hooks/useFetch";

const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);
    
    const title = mediaType === "tv" ? "tv" : "Similar Movies";

    return (
        <Carousel
            title="Similar"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
            error={error}
        />
    );
};


export default Similar;