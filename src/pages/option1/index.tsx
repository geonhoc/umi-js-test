
import React from 'react';
import Moment from 'moment';
import {Button, InputNumber, DatePicker} from 'antd';

const min: number = 1, max: number = 365;

interface State {
  startDate: string; // start Date info
  endDate: string; // end Date info
  addNum: number; // add number info
}

class Option1 extends React.Component<{}, State> {

  // state init
  state: State = {
    startDate: Moment().format('YYYY-MM-DD'),
    endDate: Moment().format('YYYY-MM-DD'),
    addNum: 1
  };

  render() {
    return (
      <div style={{marginTop: 14, padding: 24, background: '#fff', minHeight: '100%'}}>
        {/* DatePicker Area */}
        <DatePicker
          onChange={this.changeDate}
          value={Moment(this.state.startDate)}
        />

        {/* Number Counting Area */}
        <InputNumber style={{marginLeft: 10}} min={min} max={max} defaultValue={this.state.addNum} onChange={this.changeNumber} />

        {/* before Button Area */}
        <div style={{width: '100px', marginTop: 10, cursor: 'pointer'}}>
          <Button type="primary" onClick={() => this.moveDate('back')} block>이전 날</Button>
        </div>

        {/* next Button Area */}
        <div style={{width: '100px', marginTop: 10, cursor: 'pointer'}}>
          <Button type="primary" onClick={() => this.moveDate('next')} block>다음 날</Button>
        </div>

        {/* Result Area */}
        <div style={{width: '250px', marginTop: 20}}>
          <span>{this.state.startDate} + {this.state.addNum} = {this.state.endDate}</span>
        </div>
      </div>
    );
  }

  // set State
  changeState = ({startDate, endDate, addNum}: any): void => {
    this.setState({startDate , endDate, addNum});
  };

  // before or next button Click Event
  moveDate = (moveType: string): void => {
    const {startDate, addNum} = this.state;

    let changeDate: string;
    moveType === 'next' ?
      changeDate = Moment(startDate).add(1, 'days').format('YYYY-MM-DD') :
      changeDate = Moment(startDate).add(-1, 'days').format('YYYY-MM-DD');

    const stateOptions = {
      startDate: changeDate,
      endDate: Moment(changeDate).add(addNum - 1, 'days').format('YYYY-MM-DD'),
      addNum: addNum,
    };
    this.changeState(stateOptions);
  };

  // DatePicker change event
  changeDate = (date: any): void => {
    const {addNum} = this.state;
    const changeDate = Moment(date).format('YYYY-MM-DD');

    const stateOptions = {
      startDate: changeDate,
      endDate: Moment(changeDate).add(addNum - 1, 'days').format('YYYY-MM-DD'),
      addNum: addNum
    };
    this.changeState(stateOptions);
  };

  // add number change event
  changeNumber = (value: any): void => {
    const {startDate} = this.state;
    let changeDate: string, changeNum: number;

    if(min <= Number(value) && Number(value) <= max) {
      changeNum = Number(value) === 0 ? 1 : Number(value);
      changeDate = Moment(startDate).add(changeNum - 1, 'days').format('YYYY-MM-DD');

      const stateOptions = {
        startDate: startDate,
        endDate: changeDate,
        addNum: changeNum
      };
      this.changeState(stateOptions);
    }
  };
}

export default Option1;
