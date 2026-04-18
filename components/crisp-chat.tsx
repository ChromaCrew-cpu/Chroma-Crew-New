"use client"

import Script from "next/script"

/** Set NEXT_PUBLIC_CRISP_WEBSITE_ID in .env.local to enable Crisp live chat */
export function CrispChat() {
  const id = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID
  if (!id) return null
  return (
    <Script id="crisp-chat" strategy="lazyOnload">
      {`
        window.$crisp=[];
        window.CRISP_WEBSITE_ID="${id}";
        (function(){
          var d=document,s=d.createElement("script");
          s.src="https://client.crisp.chat/l.js";
          s.async=1;
          d.getElementsByTagName("head")[0].appendChild(s);
        })();
      `}
    </Script>
  )
}
