import React from 'react';
import { AddressCard } from '../components/AddressCard/AddressCard';
import './App.scss';
import { axiosInstance } from './../app/api/config';
import { SupplierCard } from '../components/SupplierCard/SupplierCard';
import { HeaderComponent } from '../components/HeaderComponent/HeaderComponent';
import { AiOutlineCheck } from "react-icons/ai";
import { Loading } from '../components/Loading/Loading';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }


  async componentDidMount() {
    try {
      const { data } = await axiosInstance.get('orders/1/');
      this.setState({ data });
    } catch (error) {
    }
  }

  render() {
    const { data } = this.state;

    return (
      <div className="app bg-dark">

        {!data && (
          <Loading />
        )}

        {data && (
          <div className="purchase-modal">

            {data.header && (
              <div className="header__section overflow-hidden pt-2 pt-xl-3 mb-4">

                <div className="row">
                  <div className="col-12">
                    {data.header && (
                      <HeaderComponent data={data.header} />
                    )}
                  </div>
                </div>

              </div>
            )}

            <div className="container-fluid">

              {data.supplier && (
                <div className="supplier__section mb-4">
                  <div className="row">
                    <div className="col-12">
                      <SupplierCard supplier={data.supplier} />
                    </div>
                  </div>
                </div>
              )}

              {data.addresses && (
                <div className="addresses__section">

                  <div className="addresses__section__title mb-3">
                    <div className="addresses__section__title__icon">
                      <AiOutlineCheck style={{ height: 12, width: 12 }} />
                    </div>
                    <span className="addresses__section__title__text">Addresses</span>
                  </div>

                  <div className="row">
                    {data.addresses.map((address) => (
                      <div key={address.label} className="col-12 mb-3 col-xl-4 d-flex align-items-stretch">
                        <AddressCard address={address} />
                      </div>
                    ))}
                  </div>

                </div>
              )}

            </div>
          </div>
        )}
      </div>
    );
  }

}

export default App;
