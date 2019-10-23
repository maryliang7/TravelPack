import { connect } from 'react-redux'
import PaymentsBreakdown from './payment_breakdown';


const mapStateToProps = (state) => ({
  members: state.entities.users,
  payments: Object.values(state.entities.payments)
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsBreakdown);