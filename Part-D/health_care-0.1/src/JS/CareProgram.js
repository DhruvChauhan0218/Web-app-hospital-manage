import {getAllCareProgram} from "./API/Api";

const getCarePrograms = async () => {
    const res = await getAllCareProgram();
    if ( res && res.data) {
        let container = document.getElementsByClassName("container")[0];
        container.innerHTML=""

        res.data.map((ele, index) => {
            let careprogram = `<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-5">
                    <div class="jss658 blue">
                        <main>
                            <section class="card-details">
                                <section class="left card-details-text">
                                    <h5 class="MuiTypography-root MuiTypography-h5" id="name">${ele.name}</h5>
                                    <h5 class="MuiTypography-root doctor-name-label MuiTypography-body1" id="description">
                                        ${ele.description}</h5>
                                    <h5 class="MuiTypography-root department-name-label MuiTypography-body1"
                                        id="department">${ele.department}</h5>
                                </section>
                            </section>
                        </main>
                        <footer class="card-footer blue">
                            <section>
                                <span class="MuiButtonBase-root MuiIconButton-root jss659 MuiCheckbox-root"
                                    aria-disabled="false">
                                    <span class="MuiIconButton-label"> <input class="jss662" type="checkbox"
                                        data-indeterminate="false" value="" /></span>
                                    <span class="MuiTouchRipple-root"></span></span>
                                <label class="MuiTypography-root MuiTypography-body1" id="duration">${ele.duration}</label>
                            </section>
                        </footer>
                    </div>
                </div>`;

            container.innerHTML+= careprogram
        });
        
        res.data.map((ele,index)=>{
            document.getElementsByClassName("jss662")[index].id = ele.id
        })
    } else {

    }
};
window.onload = getCarePrograms;
