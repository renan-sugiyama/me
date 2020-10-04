import React from 'react';
import { FaFax } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { MdMailOutline } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import Logo from "./../../assets/logo.png";

import { getDateFormated } from '../../app/utils/string';

import './HeaderComponent.scss';

export function HeaderComponent(
  {
    data,
  }
) {

  return (
    <div className="header-component row">

        <div className="header-component__purchase-order col-md-3">
          <div className="row flex-column pl-3">
            <div className="col-12">
              <span className="header-component__purchase-order__title">Purchase Order</span>
            </div>
            <div className="col-12">
              <span className="header-component__purchase-order__number">{data.number}</span>
            </div>
            <div className="col-12">
              <span className="header-component__purchase-order__serial">SerialME {data.serial}</span>
            </div>
          </div>
          <div className="header-component__purchase-order__logo d-flex align-items-center justify-content-center">
            <img src={Logo} alt="ME Logo" className="header-component__purchase-order__logo__img" />
          </div>
        </div>

        <div className="header-component__buyer col">
          <div className="row">
            <div className="col-12">
              <span className="header-component__buyer__name">
                {data.buyer}
              </span>
            </div>
            <div className="col-12">
              <span>
                <IoIosPeople className="header-component__icon" />{data.contact.name}
              </span>
            </div>
            <div className="col-12 header-component__buyer__contact">
              <span className="mr-3">
                <MdMailOutline className="header-component__icon" />{data.contact.email}
              </span>
              <span className="mr-3">
                <AiOutlinePhone className="header-component__icon" />{data.contact.phone}
              </span>
              <span>
                <FaFax className="header-component__icon" />{data.contact.fax}
              </span>
            </div>
          </div>
        </div>

        <div className="header-component__order col-md-3 col-sm-6">
          <div className="row flex-column">
            <div className="col-12">
              <span className="header-component__order__price">{data.currency} {data.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
            </div>
            <div className="col-12">
              <span className="header-component__order__status">{data.status}</span>
            </div>
            <div className="col-12">
              <span>Created on {getDateFormated(new Date(data.createdAt))}</span>
            </div>
          </div>
        </div>

    </div >
  )
}