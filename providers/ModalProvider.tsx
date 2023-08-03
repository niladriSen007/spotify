"use client"

import AuthModal from '@/components/AuthModal';
import Modal from '@/components/Modal';
import React,{useState,useEffect} from 'react'

const ModalProvider = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
      }, []);
    
      if (!isMounted) {
        return null;
      }

  return (
    <div><AuthModal /></div>
  )
}

export default ModalProvider