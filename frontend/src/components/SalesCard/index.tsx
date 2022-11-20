import SalesTable from '../SalesTable'
import './styles.css'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

function SalesCard(){

  const hoje = new Date();
  const umAnoAtras = new Date(new Date().setDate(hoje.getDate() - 365));
  

  const [startDate, setStartDate] = useState(umAnoAtras)
  const [endDate, setEndDate] = useState(hoje)

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
      <SalesTable />
    </div>

  )
}

export default SalesCard