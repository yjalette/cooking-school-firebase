import React, { useState } from 'react'

const initState = [
    { name: "Key Food", address: "west 45th street", owner: "Mike Jt", type: "store" },
    { name: "Macys", address: "east 45th street", owner: "Anna Jt", type: "store" }
]

const Test = () => {
    const [list, setList] = useState(initState);

    return (
        <div>
            <table>
                <tr>
                    <th>название</th>
                    <th>адрес</th>
                    <th>влыделец</th>
                    <th>тип</th>
                    <th>edit</th>
                </tr>
                {list.map((item, index) => <ListItem item={item} index={index} setList={setList} key={index} />)}

            </table>
        </div>
    )
}

const NotEditModeComponent = ({ item, handleEdit }) => (
    <>
        <td>{item.name}</td>
        <td>{item.address}</td>
        <td>{item.owner}</td>
        <td>{item.type}</td>
        <td onClick={handleEdit}>edit</td>
    </>
)


const EditModeComponent = ({ item, setMode, setList, index }) => {
    const [inputs, setInputs] = useState(item)

    const handleChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSave = () => {
        setList(list => {
            const newList = [...list];
            newList[index] = inputs
            return newList

        })
        setMode(false)
    }

    return (

        <>
            <td><input value={inputs.name} name="name" onChange={handleChange} /></td>
            <td><input value={inputs.address} name="address" onChange={handleChange} /> </td>
            <td><input value={inputs.owner} name="owner" onChange={handleChange} /></td>
            <td><input value={inputs.type} name="type" onChange={handleChange} /></td>
            <td onClick={handleSave}>save</td>
        </>
    )

}

const ListItem = ({ item, setList, index }) => {
    const [editMode, setMode] = useState(false)

    const handleEdit = () => {
        setMode(true)
    }

    return (
        <tr style={{ backgroundColor: editMode ? 'red' : "green" }}>
            {editMode ? <EditModeComponent item={item} handleEdit={handleEdit} setMode={setMode} setList={setList} index={index} /> : <NotEditModeComponent item={item} handleEdit={handleEdit} />}

        </tr>

    )

}





export default Test
