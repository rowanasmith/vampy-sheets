import React from "react";


  const options = [
    { label: "0", value: '0' },
    { label: "1", value: '1' },
    { label: "2", value: '2' },
    { label: "3", value: '3' },
    { label: "4", value: '4' },
    { label: "5", value: '5' },
  ];
  
  const Selector = () => (
    <div className="container">

          <select options={ options } />
        </div>
  );
//     const { selectedOption } = this.state;

//     return (
//       <select
//         value={selectedOption}
//         onChange={this.handleChange}
//         options={options}
//       >
//         <option value="0">0</option>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="5">5</option>
//       </select>
//     );
//   }
// }

export default Selector;
