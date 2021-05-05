import React, { Component }  from 'react'
import './quarantineInfo.css';

class QuarantineDetail extends React.Component {
    constructor (props) {
      super(props)
  
      this.state = {
        recipedata: ''
      }
    }
  
    componentDidMount () {
      var recipe = this.props.location.state
  
      this.setState({
        
      })
    }
  
      render = () => {
        var ingredients = this.state.recipedata.ingredientLines
        //  console.log('ingredients', typeof (ingredients))
  
        return (
          <div>
                <h1>Quaranitne Policy</h1>
                <div class="row">
                  <div class="column">
                    <h2>Requirement</h2>
                    <ul>
                      <li>Get a special one-time entry visa from an overseas Chinese Consulate.</li>
                      <li>Submit a health declaration prior to departure and have the QR code handy – through email/print out/cell phone (which functions in China).</li>
                      <li>Complete nucleic acid testing (NAT) within 48 days before boarding. Testing should be carried out in institutions designated or approved by Chinese embassies abroad (if already defined).</li>
                      
                    </ul>
                    <h2>Arrival</h2>
                    <ul>
                      <li>On landing you may need to wait on the aircraft for up to 1-2 hours while the passengers are disembarked in groups, either by name or by seat location.</li>
                      <li>Getting through the airport procedures may also take 3-4 hours; expect: queues, showing your health declaration QR code, temperature checks, form-filling and QR code scanning. A COVID test (NAT) will be taken from each traveler and sent for testing.</li>
                      <li>Have all your documents ready and prepare to fill in multiple forms and declarations for each person. Keep your boarding passes: you will need proof of flights and seat numbers in coming days.</li>
                      <li>Apply for home/central quarantine at the last “transportation” station.</li>
                      <li>You will then go to wait for a special bus to transfer you to your assigned hotel where you will wait for your test results. The transit to that location may take a long time, anything up to 5 hours has been reported.</li>
                      
                    </ul>
                  </div>
                  
                  <div class="column">
                    <h2>Special Cases</h2>
                    <ul>
                      <li>Quarantine policies are assigned to different groups of people:
GROUP 1: Inbound travelers can complete 7 of their 14 days of quarantine at home. Traveler must request 7+7 quarantine at the airport. The first 7 days must still be done at designated observation hotel site and the remaining 7 days at home, as long as the individual’s home/apartment has individual entrance and individual AC.
GROUP 2: Travelers meeting the following 3 conditions can apply for home quarantine in PVG upon arrival:
a) Traveling with children under 16 years old, medical letter, or other (APPENDIX 3);
b) Travelers have qualified home conditions;
c) Travelers have negative COVID test results after arrival to PVG;
GROUP 3: Travelers with residences without individual entrance or individual AC must stay 14 days at a quarantine hotel.
If your test result is positive, or if you develop symptoms during your quarantine, you will be transferred to a COVID-19 specialist hospital unit.</li>
                      
                    </ul>
                    <h2>After Quaranitne</h2>
                    <ul>
                      <li>If you do not develop any COVID-19 symptoms during your quarantine period, when the 14 days are finished, you will receive a release certificate. You may be subject to complete a final NAT before your release certificate is issued.</li>
                      <li> For those arriving after July 27, 2020 and under the new 7 days at hotel plus 7 days at home quarantine, a final NAT test is required before release.</li>
                      <li>For those staying at the central quarantine hotel, upon completion of the 14 days period, you can then arrange your transportation and go home.</li>
                      <li>Once you have your release certificate, you should download the Shanghai Health QR Code which will enable you to move freely around the city.</li>
                      
                    </ul>
                  </div>
                </div>
                
          </div>
        )
      }
  }
  
export default QuarantineDetail;