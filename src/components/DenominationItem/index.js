// import './index.css'

// const DenominationItem = props => {
//   const {value, updateAmount} = props
//   const addAmount = () => {
//     updateAmount(value)
//   }
//   return (
//     <button type="button" className="button" onClick={addAmount}>
//       {value}
//     </button>
//   )
// }

// export default DenominationItem

import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
