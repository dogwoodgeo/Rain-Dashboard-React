import React from 'react';
import Card from 'react-bootstrap/Card';
import Moment from 'moment';
//TODO Add tool tips explain style changes and/or link to open charts

export default class GaugeCard extends React.Component {
  //TODO Ternary operators????>

  formatTimestamp = () => {
    let timeStamp = this.props.gauge.attributes.TIMESTAMP;
    let date;
    if (Moment(timeStamp).isDST()) {
      date = new Date(timeStamp + 18000000);
      let newDate = date.toLocaleDateString('en-US', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      });
      return newDate;
    } else {
      date = new Date(timeStamp + 21600000);
      let newDate = date.toLocaleDateString('en-US', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      });
      return newDate;
    }
  };

  getAmountStyle = () => {
    if (this.props.gauge.attributes.VALUE === 0)
      return {
        color: '#e4e4e4',
        fontSize: '40px',
      };
    else if (this.props.gauge.attributes.VALID !== 'OK')
      return {
        color: '#EDD977',
        fontSize: '40px',
      };
    else
      return {
        color: '#309E75',
        fontSize: '40px',
      };
  };

  getTimeStyle = () => {
    if (this.props.gauge.attributes.VALID !== 'OK')
      return {
        color: '#EDD977',
        fontSize: '11px',
      };
    else
      return {
        color: '#8C8C8C',
        fontSize: '11px',
      };
  };

  getChangeStyle = () => {
    if (this.props.gauge.attributes.VALID !== 'OK')
      return {
        color: '#EDD977',
      };
    else
      return {
        color: '#8C8C8C',
      };
  };

  getHeaderStyle = () => {
    if (this.props.gauge.attributes.VALID !== 'OK')
      return {
        background: '#141414',
        color: '#EDD977',
      };
    else
      return {
        background: '#141414',
        color: '#e4e4e4',
      };
  };

  render() {
    const { TAGNAME, VALUE, CHANGE } = this.props.gauge.attributes;

    const setChangeText = (change) => {
      if (change === 0) {
        return 'No Change';
      } else if (change < 0) {
        return '• DATA ERROR •';
      } else {
        return `+${change}`;
      }
    };

    const setNameText = (tag) => {
      if (tag === 'ADAMS.AF2295LQT.F_CV') {
        return 'ADAMS';
      } else if (tag === 'ADAMS.AS1941CAT.F_CV') {
        return 'ARCH';
      } else if (tag === 'ADAMS.CAB2295LQT.F_CV') {
        return 'CAB';
      } else if (tag === 'ADAMS.CR1941LQT.F_CV') {
        return 'CANTRELL';
      } else if (tag === 'ADAMS.CV1942CAT.F_CV') {
        return 'CHENAL';
      } else if (tag === 'ADAMS.HR1942CAT.F_CV') {
        return 'HEINKE';
      } else if (tag === 'ADAMS.JR1941CAT.F_CV') {
        return 'JAMISON';
      } else if (tag === 'ADAMS.LA1941CAT.F_CV') {
        return 'LAMAR';
      } else if (tag === 'ADAMS.LF1941CAT.F_CV') {
        return 'LONGFELLOW';
      } else if (tag === 'ADAMS.PF2295LQT.F_CV') {
        return 'PEAK FLOW';
      } else if (tag === 'ADAMS.RR1942CAT.F_CV') {
        return 'RIVER RIDGE';
      } else if (tag === 'FOURCHE.FC2295LQT.F_CV') {
        return 'FOURCHE';
      } else if (tag === 'MAUMELLE.LM1941CAT.F_CV') {
        return 'MAUMELLE';
      }
    };

    return (
      <Card
        className='h-90 rounded m-1 text-center'
        style={{ background: '#2A2A28', width: '9rem' }}
      >
        <Card.Header
          className='font-weight-bold text-nowrap'
          style={this.getHeaderStyle()}
        >
          {setNameText(TAGNAME)}
        </Card.Header>
        <Card.Body className='p-1'>
          <Card.Text className='m-0' style={this.getTimeStyle()}>
            {this.formatTimestamp()}
          </Card.Text>
          <Card.Text
            className='font-weight-bold m-0'
            style={this.getAmountStyle()}
          >
            {VALUE}"
          </Card.Text>
          <Card.Text className='text-center' style={this.getChangeStyle()}>
            {setChangeText(CHANGE)}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
