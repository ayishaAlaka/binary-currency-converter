import { Fragment, Component } from "react";
import { GlobalStyle, AppWrapper } from "../styled-component/styles";
import { connect } from 'react-redux';
import { convertCurrency } from '../actions';
import ConverterForm from "./components/converterForm";

class HomePage extends Component {

  getResult = (data) => {
    this.props.convertCurrency(data)
  };

  render() {
    const {exchangeData,convert}=this.props
    return (
      <Fragment>
        <GlobalStyle />
        <AppWrapper>
          <ConverterForm getResult={this.getResult} convert={convert} exchangeData={exchangeData} />
        </AppWrapper>
      </Fragment>
    );
  }
}

export const mapDispatchToProps = {
  convertCurrency: convertCurrency,
};

export const mapStateToProps = (state) => ({
  exchangeData: state.exchangeData,
  convert:state.convert
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

