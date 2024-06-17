import React from "react";
import Channel from "./Channel";

export default function(){
    return (
        <div id="channels" className="my-4 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center lg:flex lg:justify-center md:grid md:grid-cols-2">
            <Channel url="/" thumbnail="/static/img/itvt_thumbnail.png" description="iTVT Watch Broadcast"/>
            <Channel url="/channel/itvt2" thumbnail="/static/img/itvt_thumbnail.png" description="iTVT 2"/>
            <Channel url="/channel/otv" thumbnail="/static/img/channel_thumbnail.png" description="oTV"/>
            <Channel url="/channel/oliwier_stream" thumbnail="/static/img/oliwierstream_thumbnail.png" description="Oliwier Stream"/>
            <Channel url="/channel/oliwier_stream_local" thumbnail="/static/img/oliwierstream_thumbnail.png" description="Oliwier Stream (local)"/>
        </div>
    )
}