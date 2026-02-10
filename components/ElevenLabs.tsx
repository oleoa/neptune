"use client";

import Script from "next/script";

export default function ElevenLabs() {
  return (
    <>
      <elevenlabs-convai agent-id="agent_2701kfqv5ngje2grpd6pmf3hd2sm"></elevenlabs-convai>
      <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed" strategy="lazyOnload" />
    </>
  );
}