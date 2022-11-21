import axios from 'axios';
import { useEffect, useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from '../../models/sale';
import { BASE_URL } from '../../util/request';

import SalesTable from '../SalesTable'
import './styles.css'

function SalesCard(){

  const hoje = new Date();
  const umAnoAtras = new Date(new Date().setDate(hoje.getDate() - 365));

  const [startDate, setStartDate] = useState(umAnoAtras)
  const [endDate, setEndDate] = useState(hoje)
  const [sales, setSales] = useState<Sale[]>([] as Sale[])

  useEffect(() => {
    let start = startDate.toISOString().slice(0,10)
    let end = endDate.toISOString().slice(0,10)

    axios.get(`${BASE_URL}/sales`, {params: {startDate: start, endDate: end}})
      .then(response =>{
        setSales(response.data.content)
      })
  }, [startDate, endDate])

  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker
              selected={startDate}
              onChange={(date: Date) => {setStartDate(date)}}
              className="dsmeta-form-control"
              dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker
              selected={endDate}
              onChange={(date: Date) => {setEndDate(date)}}
              className="dsmeta-form-control"
              dateFormat="dd/MM/yyyy"
          />
          </div>
      </div>
      <SalesTable sales={sales} />
    </div>

  )
}

export default SalesCard