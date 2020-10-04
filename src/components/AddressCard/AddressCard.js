import React from 'react';
import { FaFax } from "react-icons/fa";
import { MdMailOutline, MdPersonOutline } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";


import './AddressCard.scss';

export function AddressCard(
  {
    address,
  }
) {
  return (
    <div className="address-card d-flex flex-column w-100">

      <span className="address-card__label mb-2 mb-xl-1">{address.label}</span>

      <div className="address-card__name mb-2 mb-xl-1">
        <span className="address-card__name--title">{address.name}</span>
        {address.code && (<span className="address-card__name--code"> - ({address.code})</span>)}
      </div>

      <span className="mb-2 mb-xl-1"><FiMapPin className="address-card__icon" />{address.address}</span>

      <span className="mb-2 mb-xl-1"><MdPersonOutline className="address-card__icon" />{address.contact.name}</span>

      <span className="mb-2 mb-xl-1"><MdMailOutline className="address-card__icon" />{address.contact.email}</span>

      <div className="mb-2 mb-xl-1">
        <span className="mr-3">
          <AiOutlinePhone className="address-card__icon" />{address.contact.phone}
        </span>
        <span>
          <FaFax className="address-card__icon" />{address.contact.fax}
        </span>
      </div>

    </div >
  )
}