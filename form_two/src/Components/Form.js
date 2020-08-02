import React, {Component} from 'react'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            age: '',
            gender: '',
            occupation: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleOcupationChange = this.handleOcupationChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleAgeChange(event) {
        this.setState({age: event.target.value});
    }

    handleGenderChange(event) {
        this.setState({gender: event.target.value})
    }

    handleOcupationChange(event) {
        this.setState({ocupation: event.target.value});
    }

    handleSubmit(event) {
        alert('User Information was submitted: ');
        event.preventDefault();
    }

    render(){
        return(
        <div className='container'>
            <form ClassName='form' onSubmit={this.handleSubmit}>
                <input placeholder='username' type='text' value={this.state.username} onChange={this.handleNameChange}/>
            </form>
            <form>
                <input placeholder='password' type='password' value={this.state.password} onChange={this.handlePasswordChange}/>
            </form>  
            <form>
                <input placeholder='age' type='text' value={this.state.age} onChange={this.handleAgeChange}/>
            </form>
                <input className='male' type='radio' name='gender' value='male' onChange={this.handleGenderChange}/>
                <label for='male'>Male</label>
                <input className='male' type='radio' name='gender' value='female' onChange={this.handleGenderChange}/>
                <label for='female'>Female</label>
            <form>
                <input placeholder='occupation' type='text' value={this.state.ocupation} onChange={this.handleOcupationChange}/>
                <br/><br/>
                <button className='submit' type='submit' value='Submit'>Submit</button> 
            </form>
        </div>
        );
    }
}

export default Form; 