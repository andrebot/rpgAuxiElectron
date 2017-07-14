'use strict';

const React = require('react');
const FormInputField = require('../../../../../baseComponents/formInputField');
const AligmentTable = require('../aligmentTable/aligmentTable');

module.exports = class CreateDeity extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <h4 className="col s12">Create your Deity:</h4>
        <form className="col s12">
          <div className="row">
            <FormInputField fieldName="name" label="Deity's name"/>
            <AligmentTable columns="12"/>
          </div>
        </form>
      </div>
    );
  }
};

// render() {
  //   return (
  //     <div className="row">
  //       <h4 className="col s12">Create your Deity:</h4>
  //       <form className="col s12">
  //         <div className="row">
  //           <div className="input-field col s12">
  //             <input id="name" name="name" type="text" className="validate" />
  //             <label for="name">Deity's name</label>
  //           </div>
  //           <div className="col s12">
  //             <h6>Choose the Deity's alignment:</h6>
  //             <table className="striped centered">
  //               <thead>
  //                 <tr>
  //                   <th></th>
  //                   <th data-field="aligmentEvil">Evil</th>
  //                   <th data-field="aligmentNeutral">Neutral</th>
  //                   <th data-field="aligmentGood">Good</th>
  //                 </tr>
  //               </thead>
  //               <tbody>
  //                 <tr>
  //                   <td data-field="aligmentChaotic"><b>Chaotic</b></td>
  //                   <td>
  //                     <input id="ChaoticEvil" name="aligment" type="radio"/>
  //                     <label for="ChaoticEvil"> </label>
  //                   </td>
  //                   <td>
  //                     <input id="ChaoticNeutral" name="aligment" type="radio"/>
  //                     <label for="ChaoticNeutral"> </label>
  //                   </td>
  //                   <td>
  //                     <input id="ChaoticGood" name="aligment" type="radio"/>
  //                     <label for="ChaoticGood"> </label>
  //                   </td>
  //                 </tr>
  //                 <tr>
  //                   <td data-field="aligmentNeutra"><b>Neutral</b></td>
  //                   <td>
  //                     <input id="NeutralEvil" name="aligment" type="radio"/>
  //                     <label for="NeutralEvil"> </label>
  //                   </td>
  //                   <td>
  //                     <input id="NeutralNeutral" name="aligment" type="radio" checked/>
  //                     <label for="NeutralNeutral"> </label>
  //                   </td>
  //                   <td>
  //                     <input id="NeutralGood" name="aligment" type="radio"/>
  //                     <label for="NeutralGood"> </label>
  //                   </td>
  //                 </tr>
  //                 <tr>
  //                   <td data-field="aligmentLawful"><b>Lawful</b></td>
  //                   <td>
  //                     <input id="LawfulEvil" name="aligment" type="radio"/>
  //                     <label for="LawfulEvil"> </label>
  //                   </td>
  //                   <td>
  //                     <input id="LawfulNeutral" name="aligment" type="radio"/>
  //                     <label for="LawfulNeutral"> </label>
  //                   </td>
  //                   <td>
  //                     <input id="LawfulGood" name="aligment" type="radio"/>
  //                     <label for="LawfulGood"> </label>
  //                   </td>
  //                 </tr>
  //               </tbody>
  //             </table>
  //           </div>
  //           <div className="col s12 margin-top--default">
  //             <h6>Choose the Deity's divine domains:</h6>
  //             <div className="chips chips-placeholder"></div>
  //           </div>
  //           <div className="input-field col s12">
  //             <select id="favoredWeapon" name="favoredWeapon">
  //               <option value="" disabled selected>Choose a weapon</option>
  //               <option value="1">Option 1</option>
  //               <option value="2">Option 2</option>
  //               <option value="3">Option 3</option>
  //             </select>
  //             <label>Deity's favored weapon</label>
  //           </div>
  //           <div className="input-field col s12">
  //             <textarea id="deityDescription" name="deityDescriptio" className="materialize-textarea"></textarea>
  //             <label for="deityDescriptio">Deity's Description</label>
  //           </div>
  //           <div className="col s12">
  //             <a className="col s12 waves-effect waves-light btn">Salvar</a>
  //           </div>
  //         </div>
  //       </form>
  //     </div>
  //   );
  // }
