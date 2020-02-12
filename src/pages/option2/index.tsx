
import React from 'react';
import Moment from 'moment';
import {AutoComplete} from 'antd';

interface State {
  value: string;
  dataSource: Array<string>;
}

class Option2 extends React.Component<{}, State> {

  state: State = {
    value: '',
    dataSource: [],
  };

  render() {
    const {dataSource, value} = this.state;

    return (
      <div style={{marginTop: 14, padding: 24, background: '#fff', minHeight: '100%'}}>
        <AutoComplete
          dataSource={dataSource}
          style={{width: 200}}
          onSelect={this.onSelect}
          onSearch={this.onSearch}
          placeholder="검색"
        />
        <div><span>{value}</span></div>
      </div>
    );
  }

  onSearch = async (searchText: any): Promise<void> => {
    if(String(searchText) !== '') {
      const url = `/ajax/autocomplete?name=${searchText}`;
      const data = await fetch(String(url)).then(res => res.json());

      const list: Array<string> = [];

      for(let key in data) {
        if(data.hasOwnProperty(key)) {
          if(key === 'data') {
            const listData = data[key];
            for(let i=0; i<listData.length; i++) {
              list.push(listData[i].name);
            }
          }
        }
      }
      
      this.setState({
        dataSource: list,
      });
    }
  };

  onSelect = (value: any): void => {
    this.setState({value: value});
  };
}

export default Option2;
