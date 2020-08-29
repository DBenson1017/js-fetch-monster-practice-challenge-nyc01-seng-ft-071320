// show 50 monsters at page load 
//for each monster show: name, age, description 
//show form to create new monster (on top of page: fields, for name, age, description, create button 
// on button click, POST request to API, load returned monster in DOM 
//at bottom, Load button will load 50 more monsters 

//1 - DOMContentLoader 
document.addEventListener('DOMContentLoaded',function(){
    console.log('entered DCL')

    //global variables
    let monsterList = document.getElementById('monster-container')
    let createForm = document.getElementById('create-monster')

    //click handler
    // function clickHandler(){
    document.addEventListener('click', function(e){
        console.log('new click registered')
        let field = e.target

        // create monster 
        if (field.id ==='create-monster-bttn'){
            console.log('click registered as create new monster')
            e.preventDefault()
            createNewMonster()
        }   
        // load 50 more
        else if( field.id ==='load-more-bttn'){
            console.log('click registered as load more monsters')

        }

    }) //end of event listener
    // }// end of addEven

    
    //2 - form fields and submit button
    // function renderForm(){
        let newMon = document.createElement('form')
        let nameInput= document.createElement('input')
                nameInput.setAttribute('type','text')
                nameInput.setAttribute('class','name')
                nameInput.setAttribute('value','')
                nameInput.setAttribute('placeholder','name')
        let ageInput= document.createElement('input')
                ageInput.setAttribute('type','text')
                ageInput.setAttribute('class','age')
                ageInput.setAttribute('value','')
                ageInput.setAttribute('placeholder','age')
            let desInput= document.createElement('input')
                desInput.setAttribute('type','text')
                desInput.setAttribute('class','description')
                desInput.setAttribute('value','')
                desInput.setAttribute('placeholder','description')
            let createBttn= document.createElement('input')
                createBttn.setAttribute('type','submit')
                createBttn.setAttribute('value','Create Monster')
                createBttn.setAttribute('id','create-monster-bttn')
            newMon.append(nameInput)
            newMon.append(ageInput)
            newMon.append(desInput)
            newMon.append(createBttn)
            createForm.append(newMon)
            // } //end of renderForm
            
            // CREATE NEW MONSTER MEGA FUNCTION 
    function createNewMonster(){
            

        // function createNewMonsterData(){
        //     console.log('entered createNewMonster')
        //         let data = {
        //             name: `${nameInput.value}`,
        //             age: `${ageInput.value}`,
        //             description: `${desInput.value}`
        //     }
        // } // end of createNewMonsterData

        function createNewMonsterConfigObj(){
            console.log('inside createNewMonsterConfig')

            let data = {
                name: `${nameInput.value}`,
                age: `${ageInput.value}`,
                description: `${desInput.value}`
            }
            let configOgj = {
                method: "POST",
                headers: {
                    'content-type': "application/json",
                    'accept': "application/json"
                },
                body: JSON.stringify(data)
            }


            fetch("http://localhost:3000/monsters", configObj)
                .then(function (response){
                    return response.json()
                })
                .then(function (object){
                console.log(object)
                })
         //postNewMonster


        } // end of createNewMonsterConfigObj

    } // END OF CREATE NEW MONSTER MEGA FUNCTION 
             
            //2- prevent default and data declarations for configObj
            
            //3 - render monster function 
            function renderMonster(monsters){
                console.log('entered renderMonster')
                for (const monster of monsters){
                        let name= monster.name
                        let age= monster.age
                        let description= monster.description
                        let specificMonster = document.createElement('div')
            specificMonster.insertAdjacentHTML('beforeend', 
            `<ul>
                <li class='name'> "${name}" </li>
                <li class='age'>"${age}"</li>
                <li class='description'>"${description}"</li>
            </ul>`)
            monsterList.append(specificMonster)
            console.log('end of renderMonsters')
        }
    } // end of renderMonster
    
    //GET request for monsters 
    function getMonsters(){
        console.log('entered monster get fetch')
        fetch('http://localhost:3000/monsters')
            .then(promise => promise.json())
            .then(function(object){
                renderMonster(object.slice(0,50))
            })
    }// end of getMonsters
    
    //5- configObj that pulls data from form 
    //5 - POST (patch) fetch() tied to submit button 
    
    // renderForm()
    getMonsters()

}) // end of DOMContentLoaded
    