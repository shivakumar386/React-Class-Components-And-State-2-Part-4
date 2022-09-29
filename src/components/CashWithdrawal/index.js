// import {Component} from 'react'
// import DenominationItem from '../DenominationItem/index'
// import './index.css'

// class CashWithdrawal extends Component {
//   state = {balance: 2000}

//   updateAmount = value => {
//     this.setState(prevState => ({balance: prevState.balance - value}))
//   }

//   render() {
//     const {balance} = this.state
//     const name = 'Sarah Williams'
//     const initial = name.slice(0, 1)
//     const {denominationsList} = this.props
//     return (
//       <div className="bg-container">
//         <div className="card-container">
//           <div className="profile">
//             <p className="profile-image">{initial}</p>
//             <p className="heading">{name}</p>
//           </div>
//           <div className="balance-details">
//             <p className="balance-name">Your Balance</p>
//             <div>
//               <h1 className="balance">{balance}</h1>
//               <p className="in-rupees">In Rupees</p>
//             </div>
//           </div>
//           <h1 className="withdraw">Withdraw</h1>
//           <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
//           <div className="buttons-container">
//             {denominationsList.map(eachItem => (
//               <DenominationItem
//                 value={eachItem.value}
//                 key={eachItem.id}
//                 updateAmount={this.updateAmount}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default CashWithdrawal

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="user-details-container">
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="balance">
              {balance}
              <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
