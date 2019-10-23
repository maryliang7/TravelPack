import { connect } from 'react-redux';
import { createPayment } from '../../actions/payment_actions';
import CreatePaymentForm from './create_payment_form';

const mapStateToProps = (state) => ({
  members: state.entities.users,
  currentUser: state.session.user
});

const mapDispatchToProps = (dispatch) => ({
  createPayment: (packId, payment) => dispatch(createPayment(packId, payment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePaymentForm)