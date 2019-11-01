import React from 'react';

import type_default from '../Images/pet_creation_default.png';
import { Redirect } from 'react-router';

import '../CSS/UserDashboardStyles.css';

import UserSideMenu from './UserSideMenu';
import PetTypeComponent from './PetTypeComponent';
import Database from '../TempClasses/Database';
import Pet from '../TempClasses/Pet';

class UserCreatePetPage extends React.Component {
    state = {
        name: "",
        petType: null,
        creationSuccess: false,
        imgURL: type_default,
        typeSelected: false,
        priceString: ""
    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        // 'this' is bound to the component in this arrow function.
        this.setState({
          [name]: value  // [name] sets the object property name to the value of the 'name' variable.
        });
    }

    authGold = () => {
        if (Database.currUser.gold < this.state.petType.price) {
            return false;
        }
        else {
            return true;
        }
    }

    updateGold = () => {
        const userList = Database.userList;
        
        for (let i = 0; i < userList.length; i ++) {
            if (Database.userList === userList[i].username) {
                userList[i].gold -= this.state.petType.price;
            }
        }
    }

    createPet = () => {
        const username = Database.currUser.username
        const newPet = new Pet(this.state.name, username, this.petType.name);
        Database.petList.push(newPet)
    }

    tryCreate = () => {
        let success = true;
        if (!this.authGold()) {
            alert("Not enough gold to purchase this pet.");
            success = false;
        }

        if (success) {
            this.updateGold();
            this.createPet();
            this.setState({
                creationSuccess: true
            });
        }
    }


    selectPet = (petType) => {
        this.setState({
            petType: petType,
            typeSelected: true,
            imgURL: petType.happyImage,
            priceString: " ($" + petType.price + ")"
        })
    }

    render() {
        if (this.state.creationSuccess) {
            return(
                <Redirect push to={{
                    pathname: "/UserDashboardPage"
                }} />
            );
        }

        return(
            <div>
                <UserSideMenu/>

                <div className='main'>
                    <h1>A New Friend!</h1>
                    <div className='mainForm'>
                        <img src={this.state.imgURL} alt="Selected Type"/>
                        <ul className='container'>
                        { Database.petTypes.map((petType) => {
                            return(
                                <PetTypeComponent className='petTypes' 
                                petType={petType}
                                selectPet={this.selectPet}  />
                                )
                            })
                        }
                        </ul>
                        <br/>
                        Name:
                        <input name='name' 
                            value={ this.state.name } 
                            onChange={this.handleInputChange} 
                            type="text" 
                            placeholder="Name" />
                        <br/>
                        <button className="createButton" onClick={this.tryCreate}>Bring home!{this.state.priceString}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserCreatePetPage;