import { Heart } from "lucide-react";
import {
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    FacebookShareButton,
    FacebookShareCount,
    LinkedinIcon,
    LinkedinShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    XIcon,
  } from "react-share";

export const ShareSocial = ({shareUrl,title})=>{

    return(
<div className="flex flex-col gap-4">
    {/** pour après <button className=" flex flex-row items-center justify-center gap-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-fit"><Heart/> liker l'article</button>*/}
    <div className="flex flex-row items-center justify-center w-full gap-4 my-[50px]">
<div className="flex flex-col gap-2">
        <FacebookShareButton
          url={shareUrl}
          className=""
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <div>
          <FacebookShareCount
            url={shareUrl}
            className="flex flex-col gap-2__share-count"
          >
            {(count) => count}
          </FacebookShareCount>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <FacebookMessengerShareButton
          url={shareUrl}
          appId="521270401588372"
          className=""
        >
          <FacebookMessengerIcon size={32} round />
        </FacebookMessengerShareButton>
      </div>

      <div className="flex flex-col gap-2">
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className=""
        >
          <XIcon size={32} round />
        </TwitterShareButton>
      </div>

      <div className="flex flex-col gap-2">
        <TelegramShareButton
          url={shareUrl}
          title={title}
          className=""
        >
          <TelegramIcon size={32} round />
        </TelegramShareButton>
      </div>

      <div className="flex flex-col gap-2">
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          separator=":: "
          className=""
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>

      <div className="flex flex-col gap-2">
        <LinkedinShareButton
          url={shareUrl}
          className=""
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
</div>
</div>
    )
}