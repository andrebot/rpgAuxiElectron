  'use strict';

const React = require('react');
const InputField = require('../../../../../baseComponents/inputField');

module.exports = class AligmentTable extends React.Component {
  constructor(props) {
    super(props);

    props.headers = [
      {
        fieldName: '',
        label: '',
        isOffset: true
      },
      {
        fieldName: 'aligmentEvil',
        label: 'Evil',
        isOffset: false
      },
      {
        fieldName: 'aligmentNeutral',
        label: 'Neutral',
        isOffset: false
      },
      {
        fieldName: 'aligmentGood',
        label: 'Good',
        isOffset: false
      }
    ];

    props.rows = [
      {
        columns: [
          <InputField fieldName="ChaoticEvil" name="aligment" label="" type="radio"/>,
          <InputField fieldName="ChaoticNeutral" name="aligment" label="" type="radio"/>,
          <InputField fieldName="ChaoticGood" name="aligment" label="" type="radio"/>
        ]
      }
    ];
  }
  createHeader({fieldName, label, isOffset}, index) {
    const headerKey = `header-${index}`;
    if (isOffset) {
      return (
        <th key={headerKey}></th>
      );
    }

    return (
      <th data-field={fieldName} key={headerKey}>{label}</th>
    );
  }

  createRow({columns}, index) {
    const rowColumns = columns.map(function (column) {
      return (
        <td>{column}</td>
      );
    });

    return (
      <tr>{rowColumns}</tr>
    );
  }

  render() {
    const tableClass = `col ${this.props.columns || 12}`;
    const headers = this.props.headers.map((header, index) => {
      return this.createHeader(header, index);
    });
    const rows = this.props.rows.map((row, index) => {
      return this.createRow(row, index);
    });

    return (
      <div className={tableClass}>
        <h6>Choose the Deity's Aligment:</h6>
        <table className="striped centered">
          <thead>
            <tr>
              {headers}
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
};
  
  //           <div className="col s12">
  //             <h6>Choose the Deity's alignment:</h6>
  //             <table className="striped centered">
  //               <thead>...</thead>
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