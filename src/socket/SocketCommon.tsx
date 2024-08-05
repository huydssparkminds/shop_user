import { useEffect, useState } from "react";

interface SocketProps {
  url: string;
  params?: any;
}

const useSocketCommon = ({ url, params }: SocketProps) => {
  const [socketData, setSocketData] = useState<any | null>(null);

  useEffect(() => {
    const socket = new WebSocket(url, params);

    // socket.onopen = () => {
    //   socket.send(JSON.stringify(params));
    // };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log(data);
        setSocketData(data);
      } catch (error) {
        console.error("Lỗi", error);
      }
    };
    socket.onclose = () => {
      console.log("socket đóng");
    };

    return () => {
      socket.close();
    };
  }, [url, params]);

  return { socketData };
};

export default useSocketCommon;
