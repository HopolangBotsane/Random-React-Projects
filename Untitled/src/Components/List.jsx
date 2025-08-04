function List() {
    
    const fruit = [
                    {id: 1, name: "apple", calories: 95},
                    {id: 2, name: "orange", calories: 45},
                    {id: 3, name: "banana", calories: 105},
                    {id: 4, name: "coconut", calories: 159},
                    {id: 5, name: "pineapple", calories: 37}
    ]

    fruit.sort((a, b) => {a.name.localeCompare(b.name)})

    const listItem = fruit.map(fruit => <li key={fruit.id}>{fruit.name}, &nbsp; {fruit.calories}</li>)

    return(<ul>{listItem}</ul>)
}

export default List