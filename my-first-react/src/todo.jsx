// export default function Todo({ task }) {
//     return (
//         <li>Task : {task}</li>
//     )
// }

// conditional rendering option : 01
// export default function Todo({ task, isDone }) {
//     if (isDone === true) {
//         return <li>Finished: {task}</li>
//     }
//     else {
//         return <li>Work one : {task}</li>
//     }
// }
// export default function Todo({ task, isDone }) {
//     if (isDone) {
//         return <li>Finished: {task}</li>
//     }
//     return <li>Work one : {task}</li>
// };
// conditional rendering 3: ternary operator
// export default function Todo({ task }) {
//     return (
//         <li> {isDone ? 'Finished' : 'Work on'} : {task}</li>
//     )
// }
// conditional rendering option 4: &&
// export default function Todo({ task, isDone }) {
//     return (
//         <li>{task}  {isDone && ': Done'}</li>
//     )
// }
// export default function Todo({ task, isDone }) {
//     return (
//         <li>{task}  {isDone || ': Do it'}</li>
//     )
// }

export default function Todo({ task, isDone }) {
    let listItem;
    if (isDone) {
        listItem = <li>Finished: {task}</li>
    }
    else {
        listItem = <li>Work one : {task}</li>
    }
    return listItem;
};