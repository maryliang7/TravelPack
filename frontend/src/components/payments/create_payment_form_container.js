import { connect } from 'react-redux';
import { createPayment } from '../../actions/payment_actions';
import CreatePaymentForm from './create_payment_form';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  createPayment: (packId, paymentId) => dispatch(createPayment(packId, paymentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePaymentForm)