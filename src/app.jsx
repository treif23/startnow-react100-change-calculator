import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
      output: null,
      alert: null,

    };
    this.onChange = this.onChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  onChange(event) {

    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    });

  }

  calculate() {

    var amtReceived = parseFloat(this.state.amountReceived);
    var amtDue = parseFloat(this.state.amountDue);
    var amtChange = (amtReceived - amtDue) * 100.0;

    if (amtChange < 0) {
      var amtTwenties = parseInt(amtChange / 2000); amtChange %= 2000;
      var amtTens = parseInt(amtChange / 1000); amtChange %= 1000;
      var amtFives = parseInt(amtChange / 500); amtChange %= 500;
      var amtOnes = parseInt(amtChange / 100); amtChange %= 100;
      var amtQuarters = parseInt(amtChange / 25); amtChange %= 25;
      var amtDimes = parseInt(amtChange / 10); amtChange %= 10;
      var amtNickels = parseInt(amtChange / 5); amtChange %= 5;
      var amtPennies = Math.round(amtChange);


      this.setState({
        twenties: amtTwenties,
        tens: amtTens,
        fives: amtFives,
        ones: amtOnes,
        quarters: amtQuarters,
        dimes: amtDimes,
        nickels: amtNickels,
        pennies: amtPennies,
        output: 'The total amount still due is $' + ((amtReceived - amtDue).toFixed(2) * -1) + '!',
        alert: 'alert alert-danger'
      });

    } else {
      var amtTwenties = parseInt(amtChange / 2000); amtChange %= 2000;
      var amtTens = parseInt(amtChange / 1000); amtChange %= 1000;
      var amtFives = parseInt(amtChange / 500); amtChange %= 500;
      var amtOnes = parseInt(amtChange / 100); amtChange %= 100;
      var amtQuarters = parseInt(amtChange / 25); amtChange %= 25;
      var amtDimes = parseInt(amtChange / 10); amtChange %= 10;
      var amtNickels = parseInt(amtChange / 5); amtChange %= 5;
      var amtPennies = Math.round(amtChange);

      this.setState({
        twenties: amtTwenties,
        tens: amtTens,
        fives: amtFives,
        ones: amtOnes,
        quarters: amtQuarters,
        dimes: amtDimes,
        nickels: amtNickels,
        pennies: amtPennies,
        output: 'The total change due is $' + (amtReceived - amtDue).toFixed(2),
        alert: 'alert alert-success'
      });

    }


  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <form>


              <div className='tagline'>
                <h3 id='title' className='tagline'>Change Calculator</h3>
              </div>

              <hr />

              <div id='info'>
                <label>Enter Information</label>
              </div>
              <div className='text-center' id='box'>
                <label>How much is due?</label>
              </div>
              <div id='box1'>
                <input type='number' id='due' name='amountDue' className='form-control' onChange={this.onChange}></input>
              </div>
              <div className='text-center' id='box2'>
                <label>How much was received?</label>
              </div>
              <div id='box3'>
                <input type='number' id='received' name='amountReceived' className='form-control' onChange={this.onChange}></input>
                <br />

              </div>
            </form>

            <div id='button'>
              <button type="submit" className="btn btn-primary btn-block" onClick={this.calculate}>Calculate</button>
            </div>
          </div>
          {/* build second col-lg-6 here */}


          <div className="col-lg-8 text-center" id='title2'>
            <div className='row'>
              <div className='col-lg-12 text-center'>
                <div className={this.state.alert} role='alert'>
                  {this.state.output}
                </div>
              </div>
            </div>
            <div className='row' id='dollars'>
              <div className='col-lg-3'>
                <div className='square rounded'>
                  Twenties
                  <br />
                  <p id='twenties' className='result'>{this.state.twenties}</p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='square rounded'>
                  Tens
                <br />
                  <p id='tens' className='result'>{this.state.tens}</p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='square rounded'>
                  Fives
                <br />
                  <p id='fives' className='result'>{this.state.fives}</p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='square rounded'>
                  Ones
                <br />
                  <p id='ones' className='result'>{this.state.ones}</p>
                </div>
              </div>


            </div>

            <div className='row' id='lower'>

              <div className='col-lg-3'>
                <div className="square rounded">
                  Quarters
                <br />
                  <p id='quarters'>{this.state.quarters}</p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className="square rounded">
                  Dimes
                <br />
                  <p id='dimes'>{this.state.dimes}</p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className="square rounded">
                  Nickels
                <br />
                  <p id='nickels'>{this.state.nickels}</p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className="square rounded">
                  Pennies
                <br />
                  <p id='pennies'>{this.state.pennies}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default App;
