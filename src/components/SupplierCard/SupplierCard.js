import React from 'react';
import { FaFax } from "react-icons/fa";
import { MdPersonOutline } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";


import './SupplierCard.scss';
import { getDateFormated } from '../../app/utils/string';

export function SupplierCard(
  {
    supplier,
  }
) {

  return (
    <div className="supplier-card d-flex flex-column w-100">

      <div className="row mb-2 mb-xl-1">
        <div className="col">
          <span className="supplier-card__label">Supplier</span>
        </div>
      </div>


      <div className="row supplier-card__name align-items-center mb-2 mb-xl-1">
        <div className="col">
          <span className="supplier-card__name--title">{supplier.name}</span>
          <span className="supplier-card__name--code"> Code #({supplier.code})</span>
        </div>
      </div>

      <div className="row">

        <div className="col-xl-4">
          <div className="row">
            <div className="col-12 mb-2 mb-xl-1">
              <span>{supplier.document.value}</span>
            </div>
            <div className="col-12 truncate mb-2 mb-xl-1">
              <span>{supplier.address}</span>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <div className="col-12 mb-2 mb-xl-1">
              <span>
                <MdPersonOutline className="supplier-card__icon" />
                {supplier.contact.name} -
                <span className="supplier-card__email"> {supplier.contact.email}</span>
              </span>
            </div>
            <div className="col-12 mb-2 mb-xl-1">
              <span className="mr-3">
                <AiOutlinePhone className="supplier-card__icon" />{supplier.contact.phone}
              </span>
              <span>
                <FaFax className="supplier-card__icon" />{supplier.contact.fax}
              </span>
            </div>
          </div>
        </div>

        <div className="col flex-grow-0 supplier-card__dates">
          <div className="row flex-column">
            <div className="col-12 mb-2 mb-xl-1">
              <span><FaRegEye className="supplier-card__icon" />Read:  {getDateFormated(new Date(supplier.readAt))}</span>
            </div>
            <div className="col-12 mb-2 mb-xl-1">
              <span><RiArrowGoBackLine className="supplier-card__icon" />Last Reply: {getDateFormated(new Date(supplier.lastReplyAt))}</span>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}