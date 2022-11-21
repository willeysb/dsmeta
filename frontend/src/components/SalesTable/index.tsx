import NotificationButton from '../NotificationButton';
import './styles.css'
import { Sale } from '../../models/sale';

interface Props {
  sales: Sale[]
}

function SalesTable({ sales }: Props) {
  console.log('teste sales', sales)
  return (
    <table className="dsmeta-sales-table">
      <thead>
        <tr>
          <th className="show992">ID</th>
          <th className="show576">Data</th>
          <th>Vendedor</th>
          <th className="show992">Visitas</th>
          <th className="show992">Vendas</th>
          <th>Total</th>
          <th>Notificar</th>
        </tr>
      </thead>
      <tbody>
        {sales.map(sale => {
          return (
            <tr>
              <td className="show992">{sale.id}</td>
              <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
              <td>{sale.sellerName}</td>
              <td className="show992">{sale.visited}</td>
              <td className="show992">{sale.deals}</td>
              <td>R$ {sale.amount.toFixed(2)}</td>
              <td>
                <NotificationButton saleId={sale.id}/>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default SalesTable;