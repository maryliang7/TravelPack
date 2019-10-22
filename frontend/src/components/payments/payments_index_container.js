import { connect } from 'react-redux'
import PaymentsIndex from './payments_index';
import { createPayment, updatePayment, deletePayment } from '../../actions/payment_actions';


const mapStateToProps = (state) => ({
  members: state.entities.users
});

const mapDispatchToProps = (dispatch) => ({
  // getPack: (id) => dispatch(getPack(id)),
  deletePayment: (packId, paymentId) => dispatch(deletePayment(packId, paymentId))
});

export default connect(null, mapDispatchToProps)(PaymentsIndex);