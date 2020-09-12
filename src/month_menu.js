import React from 'react';

class month_menu extends React.Component {
  onChange = (m) => {
    var mon = m.currentTarget.value;
    console.log(mon);
    if (this.props.onChange) {
      this.props.onChange(mon);
    }
  }
  

  render() {
    return (
      <div className="month-container">
        <select value={this.props.basemap} onChange={this.onChange}>
        <option value="all">ALL</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">Decemebr</option>
        </select>
      </div>
    );
  }
};

export default month_menu;