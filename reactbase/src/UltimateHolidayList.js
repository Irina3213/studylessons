// import React, {useState, Fragment} from 'react';

// const list1 = [
//     {id: 1, name: 'The beach'},
//     {id: 1, name: 'The mountains'},
//     {id: 1, name: 'Vibrant cities'},
//     {id: 1, name: 'Roughing it'},
//     {id: 1, name: 'Ultimate survival'},
// ];
// const list2 = [
//     {id: 1, name: 'The beach'},
//     {id: 1, name: 'The mountains'},
//     {id: 1, name: 'Vibrant cities'},
//     {id: 1, name: 'Roughing it'},
//     {id: 1, name: 'Ultimate survival'},
// ];

// const UltimateHolidayList = () => {
//     const [list, setList] = useState(list);

//     const onClickHandler = () => {
//         setList(list === list1 ? list2 : list1);
//     };

//     const displayList = list1.map((item, index) => (
//         <Fragment key={item}>
//             <li>
//             <label htmlFor={`item-${index}`}>{item}</label>
//             <input id={`item-${index}`} />
//         </li>
//         </Fragment>
//     ))
//      return (
//         <section>
//             <h1>Ultimate Holiday Destinations</h1>
//             <ul>
//                 {/* {list.map(item => (
//                     <li key={item.id.toString()}>{item.name}</li>
//                 ))} */}
//                 {displayList}
//             </ul>
//             <button type="button" onClick={onClickHandler}>
//                 Change
//             </button>
//         </section>
//     );
// };

// export default UltimateHolidayList;
//
//
import React, {useState, Fragment} from 'react';

const list = [
    {id: 1, name: 'The beach', topDestination: true},
    {id: 2, name: 'The mountains',  topDestination: false},
    {id: 3, name: 'Vibrant cities',  topDestination: true},
    {id: 4, name: 'Roughing it',  topDestination: false},
    {id: 5, name: 'Ultimate survival',  topDestination: false},
];

const UltimateHolidayList = () => {
    return (
        <section>
            <h1>Ultimate Holiday Destinations</h1>
            {
                list.map(item => (
                    <li key={item.id.toString()}>{item.name}</li>
                ))
            }
        </section>
    )
};

export default UltimateHolidayList;