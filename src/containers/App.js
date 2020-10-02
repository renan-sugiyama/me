import React from 'react';
import { AddressCard } from '../components/AddressCard/AddressCard';
import './App.scss';
import { axiosInstance } from './../app/api/config';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }


  async componentDidMount() {
    try {
      // const { data } = await axiosInstance.get('orders/1/');
      const data = {
        "header": {
          "number": 4510001114,
          "serial": 11223344,
          "buyer": "MTP West Buyer",
          "price": 20000,
          "currency": "USD",
          "createdAt": "2020-04-16T15:32:55.382Z",
          "status": "Need to confirm",
          "contact": { "name": "Jacksonville Group (Jason Burn)", "email": "jacksonvillegroup@me.com", "phone": "903-575-3050", "fax": "999-575-3050" }
        },
        "supplier": {
          "code": "101908",
          "name": "Motion Industries INC.",
          "readAt": "2020-05-23T12:45:20.399Z",
          "lastReplyAt": "2020-05-23T13:00:10.380Z",
          "document": { "type": "CNPJ", "value": "00.823.053/0001-02" },
          "address": "O Box 1477 - Birmingham AL - 35201-4666 - United States of America",
          "contact": { "name": "Jack Jeff Ripple Applejack", "email": "jack_jeff_applejack@motion.com", "phone": "800-296-5522", "fax": "800-296-5522" }
        },
        "addresses": [
          {
            "label": "Ship to", "name": "West Plant", "code": "TR01", "address": "1311 W Washington Blvd, Los Angeles, CA 90006, United States", "contact": { "name": "Brian Mazda Tetsuo", "email": "Z01confirmations@me.com", "phone": "222-575-3050", "fax": "222-575-3050" }
          }, {
            "label": "Bill to", "name": "Pilgrims Pride Corp.", "code": null, "address": "1301 Glendale Blvd, Los Angeles, CA 90026, USA", "contact": { "name": "Barbara Streifes Hasseublad", "email": "Z01confirmations@me.com", "phone": "222-506-8000", "fax": "222-506-8000" }
          }, {
            "label": "Charge to", "name": "Lorem Ipsum", "code": null, "address": "2222 Promontory CR, Greeley, CO 22222-9039 - EUA", "contact": { "name": "Barbara Streifes Hasseublad", "email": "lorem.ipsum@me,com", "phone": "970-222-8000", "fax": "970-222-8000" }
          }
        ]
      }
      this.setState({ data });
    } catch (error) {
    }
  }

  render() {
    const { data } = this.state;
    
    return (
      <div className="app container-fluid">
        <div className="row">
          {data && data.addresses && data.addresses.map((address) => (
            <div key={address.label} className="col-12 col-md-4 d-flex align-items-stretch">
              <AddressCard address={address} />
            </div>
          ))}
        </div>
      </div>
    );
  }

}

export default App;
