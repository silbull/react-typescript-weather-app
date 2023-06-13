type  FormPropsType = {
    setCity: React.Dispatch<React.SetStateAction<string>>;
    getWeather: (e: React.FormEvent<HTMLFormElement>) => void
}

const Form = (props: FormPropsType) => {
    // cityはstateとよばれるデータの保管場所
    
    return(
        <form onSubmit={props.getWeather}>
            {/* placeholderは入力欄に表示される文字 <input/>はセルフクロージング　reactではこれをつかう　*/}
            <input type = "text" name = "city" placeholder = "都市名" onChange={ e => props.setCity(e.target.value)}/>
            <button type="submit">Get Weather</button> 
        </form>
    );
};

export default Form;
