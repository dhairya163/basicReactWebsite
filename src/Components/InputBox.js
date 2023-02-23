const InputBox = (props) => {
    const defaultOption = props.defaultOption;
    const operator = props.operator;

    return ( 
            <select onChange={(e) => props.onValueChange(e.target.value)} className="rounded-lg px-3 py-2 dark:bg-violet-100 w-3/12">
                <option defaultValue> {defaultOption} </option>
                {
                    operator.map( (operator) => (
                        <option value={operator} key={operator}>
                            {operator}
                        </option>
                    ))
                }
            </select>
     );
}

export default InputBox;