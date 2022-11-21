import axios from 'axios'
import { toast } from 'react-toastify'
import Icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../util/request'
import './styles.css'

interface Props {
  saleId: number
}

const handleClick = (saleId: number) => {
  axios.get(`${BASE_URL}/sales/${saleId}/notification`)
  .then((response) =>
    toast.info("SMS enviada com sucesso.")
  )
}

function NotificationButton({ saleId }: Props) {
  return (
    <div onClick={() => {handleClick(saleId)}} className="dsmeta-red-btn-container">
      <div className="dsmeta-red-btn">
        <img src={Icon} alt="Notificar" />
      </div>
    </div>
  )
}

export default NotificationButton;