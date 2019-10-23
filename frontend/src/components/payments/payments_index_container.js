import { connect } from 'react-redux'
import PaymentsIndex from './payments_index';
import { deletePayment } from '../../actions/payment_actions';


const mapStateToProps = (state) => ({
  members: state.entities.users,
  payments: Object.values(state.entities.payments)
});

const mapDispatchToProps = (dispatch) => ({
  deletePayment: (packId, paymentId) => dispatch(deletePayment(packId, paymentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsIndex);