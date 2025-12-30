import { useEffect, useRef } from "react";
import useIsBrowser from '@docusaurus/useIsBrowser';
import styles from './iframe.module.css';
export default function Iframe({
  src,
}: {
  src: string;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  console.log('src: ', src);
  console.log('window: ', window);
  useEffect(()=>{
    console.log('iframeRef: ', iframeRef);
    window.addEventListener('message', (event) => {
        console.log('docsaaa event: ', event);
        const whaleDocsFrame = iframeRef.current;
          if(event.origin === 'http://localhost:5173' && event.data.height && event.data.width) {
            whaleDocsFrame.style.height = event.data.height + 'px';
          }
        });
  },[])
  const isBrowser = useIsBrowser();
  return (
    <div className={styles.iframeContainer}>
        <h1>22222222222222222222222222</h1>
      <span>
        {isBrowser ? '浏览器环境' : '非浏览器环境'}
      </span>
      <iframe ref={iframeRef} src={src} width="100%" height="100vh" />
    </div>
  );
}
