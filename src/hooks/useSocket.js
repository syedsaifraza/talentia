import { useEffect, useRef } from 'react';
import {io} from 'socket.io-client';

const useSocket = (serverUrl) => {
    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = io(serverUrl, {
            path:'/socket.io',
            transports: ['websocket'], // force websocket, optional
        });

        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect();
            }
        };
    }, [serverUrl]);

    return socketRef;
};

export default useSocket;
