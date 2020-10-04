import React from 'react';
import { VscLoading } from "react-icons/vsc";


import './Loading.scss';

export function Loading() {
  return (
    <div className="loading">
      <VscLoading className="loading__icon" data-testid="loading" />
    </div >
  )
}